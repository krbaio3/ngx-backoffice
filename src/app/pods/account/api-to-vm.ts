import { UserAccount } from './user-account.model';
import { UserAccountAPI } from './user-account.api.model';

export const mapUserAccountFromApiToVM = (
  userAccountApi: UserAccountAPI,
): UserAccount => ({
  ...Convert.toUserAccount(userAccountApi),
});
// To parse this data:
//
//   import { Convert, UserAccount } from "./file";
//
//   const userAccount = Convert.toUserAccount(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toUserAccount(json: UserAccountAPI): UserAccount {
    return cast(json, r('UserAccountAPI'));
  }

  public static userAccountToJson(value: UserAccountAPI): string {
    return JSON.stringify(uncast(value, r('UserAccountAPI')), undefined, 2);
  }
}

function invalidValue(typ: any, value: any, key: any = ''): never {
  if (key) {
    throw new Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ,
      )} but got ${JSON.stringify(value)}`,
    );
  }
  throw new Error(
    `Invalid value ${JSON.stringify(value)} for type ${JSON.stringify(typ)}`,
  );
}

function jsonToJSProperties(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    // eslint-disable-next-line unicorn/no-array-for-each
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProperties(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    // eslint-disable-next-line unicorn/no-array-for-each
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(
  value: any,
  typ: any,
  getProperties: any,
  key: any = '',
): any {
  function transformPrimitive(typ: string, value_: any): any {
    if (typeof typ === typeof value_) return value_;
    return invalidValue(typ, value_, key);
  }

  function transformUnion(typs: any[], value_: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let index = 0; index < l; index++) {
      const typ = typs[index];
      try {
        return transform(value_, typ, getProperties);
      } catch {}
    }
    return invalidValue(typs, value_);
  }

  function transformEnum(cases: string[], value_: any): any {
    if (cases.includes(value_)) return value_;
    return invalidValue(cases, value_);
  }

  function transformArray(typ: any, value_: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(value_)) return invalidValue('array', value_);
    return value_.map((element) => transform(element, typ, getProperties));
  }

  function transformDate(value_: any): any {
    if (value_ === null) {
      return;
    }
    const d = new Date(value_);
    if (Number.isNaN(d.valueOf())) {
      return invalidValue('Date', value_);
    }
    return d;
  }

  function transformObject(
    properties: { [k: string]: any },
    additional: any,
    value_: any,
  ): any {
    if (
      value_ === null ||
      typeof value_ !== 'object' ||
      Array.isArray(value_)
    ) {
      return invalidValue('object', value_);
    }
    const result: any = {};
    for (const key of Object.getOwnPropertyNames(properties)) {
      const property = properties[key];
      const v = Object.prototype.hasOwnProperty.call(value_, key)
        ? value_[key]
        : undefined;
      result[property.key] = transform(
        v,
        property.typ,
        getProperties,
        property.key,
      );
    }
    for (const key of Object.getOwnPropertyNames(value_)) {
      if (!Object.prototype.hasOwnProperty.call(properties, key)) {
        result[key] = transform(value_[key], additional, getProperties, key);
      }
    }
    return result;
  }

  if (typ === 'any') return value;
  if (typ === null) {
    if (value === null) return value;
    return invalidValue(typ, value);
  }
  if (typ === false) return invalidValue(typ, value);
  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, value);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, value)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, value)
      : typ.hasOwnProperty('props')
      ? transformObject(getProperties(typ), typ.additional, value)
      : invalidValue(typ, value);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof value !== 'number') return transformDate(value);
  return transformPrimitive(typ, value);
}

function cast<T>(value: any, typ: any): T {
  return transform(value, typ, jsonToJSProperties);
}

function uncast<T>(value: T, typ: any): any {
  return transform(value, typ, jsToJSONProperties);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(properties: any[], additional: any) {
  return { props: properties, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  UserAccountAPI: o([{ json: 'data', js: 'data', typ: r('Data') }], false),
  Data: o(
    [
      { json: 'userDetails', js: 'userDetails', typ: r('UserDetails') },
      { json: 'userAddress', js: 'userAddress', typ: r('UserAddress') },
      { json: 'userContact', js: 'userContact', typ: r('UserContact') },
    ],
    false,
  ),
  UserAddress: o(
    [
      { json: 'address', js: 'address', typ: '' },
      { json: 'city', js: 'city', typ: '' },
      { json: 'postCode', js: 'postCode', typ: '' },
      { json: 'country', js: 'country', typ: '' },
      { json: 'countryCode', js: 'countryCode', typ: 0 },
    ],
    false,
  ),
  UserContact: o(
    [
      { json: 'mainPhone', js: 'mainPhone', typ: '' },
      { json: 'alternativePhone', js: 'alternativePhone', typ: '' },
      { json: 'email', js: 'email', typ: '' },
    ],
    false,
  ),
  UserDetails: o(
    [
      { json: 'id', js: 'id', typ: 0 },
      { json: 'userCode', js: 'userCode', typ: '' },
      { json: 'job', js: 'job', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      { json: 'registrationDate', js: 'registrationDate', typ: Date },
    ],
    false,
  ),
};

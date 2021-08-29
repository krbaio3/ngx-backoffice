export interface Frequency {
  [T: string]: string;
}

export interface QueryNames {
  input1: IInput;
  input2: IInput;
  input3: IInput;
  datePicker: IInput;
  select: ISelect;
}

export interface IInput {
  label: string;
  placeholder: string;
}

export interface ISelect extends IInput {
  options: Frequency[];
}

export const createEmptyQueryNames: () => QueryNames = (): QueryNames => ({
  datePicker: {
    label: '',
    placeholder: '',
  },
  input1: {
    label: '',
    placeholder: '',
  },
  input2: {
    label: '',
    placeholder: '',
  },
  input3: {
    label: '',
    placeholder: '',
  },
  select: {
    label: '',
    placeholder: '',
    options: [],
  },
});

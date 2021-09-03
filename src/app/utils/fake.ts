export function makeid(length: number): string {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let index = 0; index < length; index++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function makeString(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  for (let index = 0; index < length; index++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export function makeNumber(length: number = 1): number {
  // Si le meto un 3, deberia de transformarlo en 999
  if (length <= 0) {
    length = 1;
  }
  let long = '';
  for (let index = 1; index <= length; index++) {
    long += '9';
  }
  return Math.round(Math.random() * Number(long) + 1);
}
export function randomDate(from: Date, to: Date): string {
  const fromTime = from.getTime() + 7_200_000;
  const toTime = to.getTime() + 7_200_000;
  return new Date(fromTime + Math.random() * (toTime - fromTime)).toISOString();
}

export function formatDate(date: string): string {
  return date.split('T')[0].replace('-', '/').split('T')[0].replace('-', '/');
}

export function removeSlashDate(date: string) {
  return date.replace(/\//g, '');
}

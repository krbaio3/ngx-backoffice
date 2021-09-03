import {
  formatDate,
  makeNumber,
  makeString,
  randomDate,
  removeSlashDate,
} from '../../utils/fake';

export const displayColumnsTemporal: string[] = ['files', 'date'];

export function generateFile(
  dateFrom: Date,
  dateTo: Date,
): { files: string; date: string }[] {
  let files = [];

  for (let index = 0; index <= 40; index++) {
    let randomD = randomDate(dateFrom, dateTo);
    files.push({
      files: `RP6034_${makeString(1)}${makeNumber(3)}_${removeSlashDate(
        formatDate(randomD),
      )}_${makeNumber(6)}_WEB.csv`,
      date: `${formatDate(randomD)}`,
    });
  }
  return files;
}

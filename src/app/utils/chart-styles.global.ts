import { valueOrDefault } from 'chart.js/helpers';

// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
let _seed = Date.now();

export function srand(seed: number) {
  _seed = seed;
}

export function rand(min = 0, max = 0) {
  min = valueOrDefault(min, 0);
  max = valueOrDefault(max, 0);
  _seed = (_seed * 9301 + 49_297) % 233_280;
  return min + (_seed / 233_280) * (max - min);
}

export function numbers(config: any) {
  const cfg = config || {};
  const min = valueOrDefault(cfg.min, 0);
  const max = valueOrDefault(cfg.max, 100);
  const from = valueOrDefault(cfg.from, []);
  const count = valueOrDefault(cfg.count, 8);
  const decimals = valueOrDefault(cfg.decimals, 8);
  const continuity = valueOrDefault(cfg.continuity, 1);
  const dfactor = Math.pow(10, decimals) || 0;
  const data = [];
  let index, value;

  for (index = 0; index < count; ++index) {
    value = (from[index] || 0) + rand(min, max);
    if (rand() <= continuity) {
      data.push(Math.round(dfactor * value) / dfactor);
    } else {
      data.push(undefined);
    }
  }

  return data;
}

export function points(config: any) {
  const xs = numbers(config);
  const ys = numbers(config);
  return xs.map((x, index) => ({ x, y: ys[index] }));
}

export function labels(config: any) {
  const cfg = config || {};
  const min = cfg.min || 0;
  const max = cfg.max || 100;
  const count = cfg.count || 8;
  const step = (max - min) / count;
  const decimals = cfg.decimals || 8;
  const dfactor = Math.pow(10, decimals) || 0;
  const prefix = cfg.prefix || '';
  const values = [];
  let index;

  for (index = min; index < max; index += step) {
    values.push(prefix + Math.round(dfactor * index) / dfactor);
  }

  return values;
}

const MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function months(config: any) {
  const cfg = config || {};
  const count = cfg.count || 12;
  const section = cfg.section;
  const values = [];
  let index, value;

  for (index = 0; index < count; ++index) {
    value = MONTHS[Math.ceil(index) % 12];
    values.push(value.slice(0, Math.max(0, section)));
  }

  return values;
}

const COLORS: string[] = [
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#58595b',
  '#8549ba',
];

export function color(index: number) {
  return COLORS[index % COLORS.length];
}

export const CHART_COLORS: { [key: string]: string } = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
};

const NAMED_COLORS: string[] = [
  CHART_COLORS.red,
  CHART_COLORS.orange,
  CHART_COLORS.yellow,
  CHART_COLORS.green,
  CHART_COLORS.blue,
  CHART_COLORS.purple,
  CHART_COLORS.grey,
];

export function namedColor(index: number) {
  return NAMED_COLORS[index % NAMED_COLORS.length];
}
export type Key =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'grey';

export function transparentize(value: Key, opacity: number) {
  const alpha = opacity === undefined ? 0.5 : 1 - opacity;

  const rgbColor = CHART_COLORS[value]
    .slice(
      CHART_COLORS[value].indexOf('(') + 1,
      CHART_COLORS[value].indexOf(')'),
    )
    .split(',');
  return `rgba(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}, ${alpha})`;
}

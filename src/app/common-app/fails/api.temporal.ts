import { RankingList, TableLogs } from './fails.model';
import { TData } from '@atmira/pattern-lib';
import {
  CHART_COLORS,
  numbers,
  transparentize,
} from '../../utils/chart-styles.global';

export const rankingListTemporal: RankingList[] = [
  {
    companyIcon: 'assets/images/companies/acciona.png',
    companyName: 'Acciona',
    name: 'acciona',
    accept: '20k',
    pending: '1',
    cancel: '4',
  },
  {
    companyIcon: 'assets/images/companies/bbva.png',
    name: 'BBVA',
    companyName: 'bbva',
    accept: '20k',
    pending: '1',
    cancel: '4',
  },
  {
    companyIcon: 'assets/images/companies/inditex.png',
    companyName: 'Inditex',
    name: 'inditex',
    accept: '20k',
    pending: '1',
    cancel: '4',
  },
  {
    companyIcon: 'assets/images/companies/regis-tr.png',
    companyName: 'Regist TR',
    name: 'registr',
    accept: '15k',
    pending: '123',
    cancel: '234',
  },
  {
    companyIcon: 'assets/images/companies/mapfre.png',
    companyName: 'Mapfre',
    name: 'mapfre',
    accept: '5k',
    pending: '500',
    cancel: '234',
  },
  {
    companyIcon: 'assets/images/companies/repsol.png',
    companyName: 'Repsol',
    name: 'repsol',
    accept: '3k',
    pending: '1K',
    cancel: '700',
  },
  {
    companyIcon: 'assets/images/companies/santander.png',
    companyName: 'Santander',
    name: 'mapfre',
    accept: '2k',
    pending: '0',
    cancel: '200',
  },
];

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
const NUMBER_CFG_RADAR = { count: DATA_COUNT, min: 0, max: 100 };

export const basicDataTimeVariationTemporary: TData = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  datasets: [
    {
      label: 'Acciona',
      data: numbers(NUMBER_CFG) as number[],
      borderColor: CHART_COLORS.red,
      backgroundColor: CHART_COLORS.red,
    },
    {
      label: 'Inditex',
      data: numbers(NUMBER_CFG) as number[],
      borderColor: CHART_COLORS.orange,
      backgroundColor: CHART_COLORS.orange,
    },
    {
      label: 'RegisTR',
      data: numbers(NUMBER_CFG) as number[],
      borderColor: CHART_COLORS.green,
      backgroundColor: CHART_COLORS.green,
    },
    {
      label: 'BBVA',
      data: numbers(NUMBER_CFG) as number[],
      borderColor: CHART_COLORS.blue,
      backgroundColor: CHART_COLORS.blue,
    },
    {
      label: 'Mapfre',
      data: numbers(NUMBER_CFG) as number[],
      borderColor: CHART_COLORS.yellow,
      backgroundColor: CHART_COLORS.yellow,
    },
    {
      label: 'Repsol',
      data: numbers(NUMBER_CFG) as number[],
      borderColor: CHART_COLORS.purple,
      backgroundColor: CHART_COLORS.purple,
    },
    {
      label: 'Santander',
      data: numbers(NUMBER_CFG) as number[],
      borderColor: CHART_COLORS.grey,
      backgroundColor: CHART_COLORS.grey,
    },
  ],
};

export const basicDataErrorGlobalTemporary: TData = {
  labels: [
    'Acciona',
    'Inditex',
    'Regist TR',
    'BBVA',
    'Mapfre',
    'Repsol',
    'Santander',
  ],
  datasets: [
    {
      label: 'Dataset 1',
      data: numbers(NUMBER_CFG_RADAR) as number[],
      backgroundColor: [
        transparentize('red', 0.5),
        transparentize('orange', 0.5),
        transparentize('green', 0.5),
        transparentize('blue', 0.5),
        transparentize('yellow', 0.5),
        transparentize('purple', 0.5),
        transparentize('grey', 0.5),
      ],
    },
  ],
};

export const tableLogsTemporal: TableLogs[] = [
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'check',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'check',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'check',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'pending',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'cancel',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'cancel',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'check',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'pending',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'check',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'pending',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'cancel',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'check',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'pending',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'check',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'pending',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'cancel',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'check',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'pending',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'check',
  },
  {
    date: Date.now(),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    icon: 'pending',
  },
];

export const displayColumnsTemporal: string[] = ['date', 'description', 'icon'];

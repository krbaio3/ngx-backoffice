import { CHART_COLORS, numbers } from '../../utils/chart-styles.global';
import { TOptions } from '@atmira/pattern-lib';
import { MediaStylesModel } from '../../common';
import { Message } from '../../common/filter-menu/filter-menu.model';

export const labelChartTemporary: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

export const dataSetTemporary = [
  {
    label: 'Accept',
    data: numbers(NUMBER_CFG),
    backgroundColor: CHART_COLORS.red,
    stack: 'Stack 0',
  },
  {
    label: 'Reject',
    data: numbers(NUMBER_CFG),
    backgroundColor: CHART_COLORS.blue,
    stack: 'Stack 0',
  },
];

export const chartOptionsTemporary: TOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      align: 'start',
      text: 'Action Monitoring',
    },
  },
};

export const mediaStylesTemporary: MediaStylesModel[] = [
  {
    colorLight: '#0023F5',
    icon: 'check',
    data: {
      colorDark: '#001AB8',
      number: '2500',
      title: 'Accept',
      fontSize: '40px',
      color: 'white',
    },
  },
  {
    colorLight: '#0023F5',
    icon: 'restart_alt',
    data: {
      colorDark: '#001AB8',
      number: '2500',
      title: 'Reject',
      fontSize: '40px',
      color: 'white',
    },
  },
  {
    colorLight: '#0023F5',
    icon: 'alarm',
    data: {
      colorDark: '#001AB8',
      number: '2500',
      title: 'Pending',
      fontSize: '40px',
      color: 'white',
    },
  },
];

export const doughnutOptionsTemporary: TOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Doughnut Chart',
    },
  },
};

export const doughnutDatasetTemporary = [
  {
    label: 'Dataset 1',
    data: numbers(NUMBER_CFG),
    backgroundColor: Object.values(CHART_COLORS),
  },
];

export const doughnutLabelTemporary: string[] = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
];

export interface DoughnutDataGroup {
  chartName: string;
  filter?: boolean;
  chartLabel: string[];
  dataset: Dataset[];
  options: TOptions;
}

interface Dataset {
  chartLabelDataset: string[];
  label: string;
  data: (number | undefined)[];
  backgroundColor: string[];
}

export const doughnutLabelGroupTemporary: DoughnutDataGroup[] = [
  {
    chartName: 'Archivos',
    chartLabel: ['Accept', 'Reject', 'InProgress'],
    dataset: [
      {
        chartLabelDataset: ['Accept', 'Reject', 'InProgress'],
        label: 'Archivos',
        data: numbers({ count: 3, min: 0, max: 100 }),
        backgroundColor: Object.values(CHART_COLORS),
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: 'Chart.js Doughnut Chart',
        },
      },
    },
  },
  {
    chartName: 'Proc x Mensaje',
    chartLabel: ['Accept', 'Reject', 'InProgress'],
    dataset: [
      {
        chartLabelDataset: ['Accept', 'Reject', 'InProgress'],
        label: 'Activity Type',
        data: numbers({ count: 3, min: 0, max: 100 }),
        backgroundColor: Object.values(CHART_COLORS),
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: 'Chart.js Doughnut Chart',
        },
      },
    },
  },
  {
    filter: true,
    chartName: 'Errores',
    chartLabel: ['ActionType', 'ErrorCode'],
    dataset: [
      {
        chartLabelDataset: ['Type 1', 'Type 2', 'Type 3'],
        label: 'ActionType',
        data: numbers({ count: 3, min: 0, max: 100 }),
        backgroundColor: Object.values(CHART_COLORS),
      },
      {
        chartLabelDataset: ['Type 4', 'Type 5', 'Type 6'],
        label: 'ErrorCode',
        data: numbers({ count: 3, min: 0, max: 100 }),
        backgroundColor: Object.values(CHART_COLORS),
      },
    ],
    options: {
      animation: {
        duration: 2000,
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: 'Chart.js Doughnut Chart',
        },
      },
    },
  },
];

export const messagesTemporary: Message[] = [
  { name: 'Tipo 1', value: 'type1' },
  { name: 'Tipo 2', value: 'type2' },
  { name: 'Tipo 3', value: 'type3' },
  { name: 'Tipo 4', value: 'type4' },
];

export const dataTableSourceTemporary = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export const displayedTableColumnsTemporary: string[] = [
  'position',
  'name',
  'weight',
  'symbol',
];

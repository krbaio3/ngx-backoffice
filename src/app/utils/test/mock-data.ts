import { CHART_COLORS, numbers } from '../chart-styles.global';
import { DoughnutDataGroup } from '../../common-app/summary/temporal';

export const dataTableSourceMock = [
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

export const displayedTableColumnsMock: string[] = [
  'position',
  'name',
  'weight',
  'symbol',
];

export const doughnutLabelGroupMock: DoughnutDataGroup[] = [
  {
    chartName: 'Archivos',
    chartLabel: ['Aceptados', 'Rechazados', 'InProgress'],
    dataset: [
      {
        chartLabelDataset: ['Aceptados', 'Rechazados', 'InProgress'],
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
    chartLabel: ['Aceptados', 'Rechazados', 'InProgress'],
    dataset: [
      {
        chartLabelDataset: ['Aceptados', 'Rechazados', 'InProgress'],
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

export const labelChartMock: string[] = ['January', 'February', 'March'];

export const dataSetMock = [
  {
    label: 'Aceptados',
    data: numbers({ count: 3, min: 0, max: 100 }),
    backgroundColor: CHART_COLORS.red,
    stack: 'Stack 0',
  },
  {
    label: 'Rechazados',
    data: numbers({ count: 3, min: 0, max: 100 }),
    backgroundColor: CHART_COLORS.blue,
    stack: 'Stack 0',
  },
];

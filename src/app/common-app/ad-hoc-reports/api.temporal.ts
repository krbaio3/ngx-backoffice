import { BodyOption } from 'src/app/core/body-options/body-options.model';
import { Frequency } from './ad-hoc-reports.model';

export const frequencyTemporal: Frequency[] = [
  { key: 'daily-0', value: 'Daily' },
  { key: 'weekly-1', value: 'Weekly' },
  { key: 'monthly-2', value: 'Monthly' },
];

export const checkboxOptionsTemporal: string[] = [
  'Report Type 1',
  'Report Type 2',
  'Report Type 3',
  'Report Type 4',
  'Report Type 5',
  'Report Type 6',
];

export const partyOptionsTemporal: BodyOption[] = [
  {
    input: 'Reporting Counterparty ID',
    select: 'Select type of ID',
  },
  {
    input: 'Other Counterparty ID',
    select: 'Select type of ID',
  },
  {
    input: 'Report Submitting entity ID',
    select: 'Select type of ID',
  },
  {
    input: 'Broker ID',
    select: 'Select type of ID',
  },
  {
    input: 'CCP ID',
    select: 'Select type of ID',
  },
];

export const productOptionsTemporal: BodyOption[] = [
  {
    input: 'Underlying identification',
    select: 'Select type of ID',
  },
  {
    input: 'Product Identification',
    select: 'Select type of ID',
  },
];

export const datesTemporal: string[] = [
  'Reporting Timestamp',
  'Execution date',
  'Termination date',
  'Maturity date',
];

export const additionalFiltersTemporal: string[] = [
  'Venue of execution',
  'Level',
  'Action type',
  'Portfolio code',
];

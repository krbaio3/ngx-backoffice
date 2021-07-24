import { NgStyle } from '@angular/common';

export const adHocReports: AdHocReport = {
  card: {
    style: {
      backgroundColor: 'rgba(77, 86, 86, 0.3)',
      color: 'rgba(41, 128, 185, 1)',
      marginBottom: '20px',
    },
  },
};

type AdHocReport = {
  card: {
    style: NgStyle['ngStyle'];
  };
};

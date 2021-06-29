export interface MenuElement {
  title?: string;
  name: string;
  icon: string;
  link: boolean | string;
  open: boolean;
  chip?: {
    value: number;
    color: string;
  };
  sub?: SubMenu[];
}

export interface SubMenu {
  name: string;
  link: string;
  icon: string;
  chip?: boolean;
  open: boolean;
}

export const menus: MenuElement[] = [
  {
    title: 'Main',
    name: '',
    icon: '',
    link: '',
    open: false,
  },
  {
    title: 'Main',
    name: 'Reporting Status',
    icon: 'multiline_chart',
    link: false,
    open: false,
    chip: { value: 1, color: 'accent' },
    sub: [
      {
        name: 'Reporting Summary',
        link: 'main/reporting/summary',
        icon: 'analytics',
        chip: false,
        open: false,
      },
      {
        name: 'Processed Files',
        link: 'main/reporting/processed',
        icon: 'check',
        chip: false,
        open: false,
      },
      {
        name: 'Pending Files',
        link: 'main/reporting/pending',
        icon: 'pending',
        chip: false,
        open: false,
      },
      {
        name: 'Error Files',
        link: 'main/reporting/error',
        icon: 'report_gmailerrorred',
        chip: false,
        open: false,
      },
    ],
  },
  {
    title: 'Main',
    name: 'Output',
    icon: 'folder_open',
    open: false,
    link: false,
    sub: [
      {
        name: 'Response Files',
        link: 'main/output/response',
        icon: 'content_copy',
        chip: false,
        open: false,
      },
    ],
  },
  {
    title: 'Main',
    name: 'Search R001 RTS',
    icon: 'search',
    open: false,
    link: false,
    sub: [
      {
        name: 'Contacts',
        link: 'main/search/contacts',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Inactive Contracts',
        link: 'main/search/inactive',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Transactions / Messages',
        link: 'main/search/transactions',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Valuation Updates',
        link: 'main/search/valuation',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Collateral Portfolio Codes',
        link: 'main/search/codes',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'ID Modification',
        link: 'main/search/modification',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Portability',
        link: 'main/search/portability',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Positions',
        link: 'main/search/positions',
        icon: 'search',
        chip: false,
        open: false,
      },
    ],
  },
  {
    title: 'Main',
    name: 'Search R010 RTS',
    icon: 'search',
    open: false,
    link: false,
    sub: [
      {
        name: 'RT10 Trades',
        link: 'main/search/trades',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'RT10 Transactions',
        link: 'main/search/transactions',
        icon: 'search',
        chip: false,
        open: false,
      },
    ],
  },
  {
    title: 'Main',
    name: 'Reports',
    icon: 'summarize',
    open: false,
    link: false,
    sub: [
      {
        name: 'Daily Reports',
        link: 'main/reports/daily',
        icon: 'summarize',
        chip: false,
        open: false,
      },
      {
        name: 'Weekly Reports',
        link: 'main/reports/weekly',
        icon: 'summarize',
        chip: false,
        open: false,
      },
      {
        name: 'Monthly Reports',
        link: 'main/reports/monthly',
        icon: 'summarize',
        chip: false,
        open: false,
      },
    ],
  },
  {
    title: 'Documentation',
    name: '',
    icon: '',
    link: '',
    open: false,
  },
  {
    title: 'Documentation',
    name: 'Guides',
    icon: 'picture_as_pdf',
    open: false,
    link: 'docs/guides',
  },
  {
    title: 'Documentation',
    name: 'Handbooks',
    icon: 'picture_as_pdf',
    open: false,
    link: 'docs/handbooks',
  },
  {
    title: 'Documentation',
    name: 'Schemas & Templates',
    icon: 'picture_as_pdf',
    open: false,
    link: 'docs/schemas',
  },
  {
    title: 'Documentation',
    name: 'Legal Framework',
    icon: 'picture_as_pdf',
    open: false,
    link: 'docs/legal',
  },
  {
    title: 'Documentation',
    name: 'Pricing',
    icon: 'picture_as_pdf',
    open: false,
    link: 'docs/pricing',
  },
  {
    title: 'Account',
    name: '',
    icon: '',
    link: '',
    open: false,
  },
  {
    title: 'Account',
    name: 'User Information',
    icon: 'face',
    open: false,
    link: 'account/user',
  },
];

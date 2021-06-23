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
        link: '',
        icon: 'analytics',
        chip: false,
        open: false,
      },
      {
        name: 'Processed Files',
        link: '',
        icon: 'check',
        chip: false,
        open: false,
      },
      {
        name: 'Pending Files',
        link: '',
        icon: 'pending',
        chip: false,
        open: false,
      },
      {
        name: 'Error Files',
        link: '',
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
        link: 'material-widgets/buttons',
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
        link: 'material-widgets/buttons',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Inactive Contracts',
        link: 'material-widgets/list',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Transactions / Messages',
        link: 'material-widgets/stepper',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Valuation Updates',
        link: 'material-widgets/expansion',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Collateral Portfolio Codes',
        link: 'material-widgets/spinner',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'ID Modification',
        link: 'material-widgets/cards',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Portability',
        link: 'material-widgets/icons',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'Positions',
        link: 'material-widgets/autocomplete',
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
        link: '',
        icon: 'search',
        chip: false,
        open: false,
      },
      {
        name: 'RT10 Transactions',
        link: '',
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
        link: '',
        icon: 'summarize',
        chip: false,
        open: false,
      },
      {
        name: 'Weekly Reports',
        link: '',
        icon: 'summarize',
        chip: false,
        open: false,
      },
      {
        name: 'Monthly Reports',
        link: '',
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
    link: false,
  },
  {
    title: 'Documentation',
    name: 'Handbooks',
    icon: 'picture_as_pdf',
    open: false,
    link: false,
  },
  {
    title: 'Documentation',
    name: 'Schemas & Templates',
    icon: 'picture_as_pdf',
    open: false,
    link: false,
  },
  {
    title: 'Documentation',
    name: 'Legal Framework',
    icon: 'picture_as_pdf',
    open: false,
    link: false,
  },
  {
    title: 'Documentation',
    name: 'Pricing',
    icon: 'picture_as_pdf',
    open: false,
    link: false,
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
    link: false,
  },
];

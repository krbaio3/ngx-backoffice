export interface DataSourceAdvancedFilters {
  queryID: string;
  queryName: string;
  author: string;
  creationDate: string;
  submissionDate: string;
  action: {
    key: string;
    value: string;
  };
}

export interface SelectOptions {
  key: string;
  value: string;
}

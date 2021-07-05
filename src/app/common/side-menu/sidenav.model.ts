export interface SidenavModel {
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

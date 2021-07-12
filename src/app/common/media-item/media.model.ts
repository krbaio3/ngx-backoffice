export interface MediaStylesModel {
  colorLight: string;
  icon: string;
  data: {
    colorDark: string;
    number: string;
    title: string;
    color: string;
    fontSize: string;
  };
}

export const createEmptyMediaStyle = (): MediaStylesModel => ({
  colorLight: '',
  icon: '',
  data: {
    colorDark: '',
    number: '',
    title: '',
    color: '',
    fontSize: '',
  },
});

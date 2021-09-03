// export interface MediaStylesModel {
//   colorLight: string;
//   icon: string;
//   colorDark: string;
//   number: string;
//   title: string;
// }
//
// export const createEmptyMediaStyle = () => ({
//   colorLight: '',
//   icon: '',
//   colorDark: '',
//   number: '',
//   title: '',
// });

export interface EmitterEventCanvas {
  originalEvent: MouseEvent;
  element: DataSetElement;
  dataset: DataSetElement[];
}

interface DataSetElement {
  datasetIndex: number;
  element: any;
  index: number;
}

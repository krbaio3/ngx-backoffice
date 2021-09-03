export interface FileListCustom extends FileList {
  readonly length: number;
  item(index: number): FileCustom | null;
  [index: number]: FileCustom;
}
export interface FileCustom extends File {
  progress: number;
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { displayColumnsTemporal, generateFile } from './api.temporal';

@Injectable({
  providedIn: 'root',
})
export class ResponseFilesService {
  get responseFiles(): { files: string; date: string }[] {
    return this._responseFiles;
  }

  set responseFiles(value: { files: string; date: string }[]) {
    this._responseFiles = value;
  }
  get displayColumnsRF(): string[] {
    return this._displayColumnsRF;
  }

  set displayColumnsRF(value: string[]) {
    this._displayColumnsRF = value;
  }

  private _displayColumnsRF: string[] = [];
  private _responseFiles: { files: string; date: string }[] = [];

  constructor() {}

  public getDisplayColumnsRF() {
    of(displayColumnsTemporal).subscribe(
      (columns) => (this.displayColumnsRF = columns),
    );
  }

  public getResponseFiles(from: Date, to: Date) {
    of(generateFile(from, to)).subscribe(
      (files) => (this.responseFiles = files),
    );
  }
}

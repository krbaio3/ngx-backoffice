import { Component, ElementRef, ViewChild } from '@angular/core';
import { FileListCustom } from './input-file.model';

@Component({
  selector: 'atm-input-file',
  template: `
    <div class="container" atmDnd (fileDropped)="onFileDropped($event)">
      <input
        type="file"
        #fileDropRef
        id="fileDropRef"
        multiple
        (change)="fileBrowseHandler($event)"
      />
      <mat-icon class="md-72">cloud_upload</mat-icon>
      <h3>Drag and drop file here</h3>
      <h3>or</h3>
      <label for="fileDropRef">Browse for file</label>
    </div>
    <div class="files-list">
      <div
        class="single-file animate__animated animate__fadeInDown"
        *ngFor="let file of files; let i = index"
      >
        <mat-icon class="md-48 rotate90" color="primary">attachment</mat-icon>
        <div class="info">
          <h4 class="name">
            {{ file?.name }}
          </h4>
          <p class="size">
            {{ formatBytes(file?.size) }}
          </p>
          <atm-progress [progress]="file?.progress"></atm-progress>
        </div>
        <button
          mat-icon-button
          aria-label="Example icon button with a vertical three dot icon"
          (click)="deleteFile(i)"
          class="delete"
        >
          <mat-icon class="md-24">delete</mat-icon>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent {
  @ViewChild('fileDropRef', { static: false })
  fileDropEl!: ElementRef;
  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event: FileList) {
    this.prepareFilesList($event as FileListCustom);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: Event) {
    // @ts-ignore
    this.prepareFilesList(files.target!.files!);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log('Upload in progress.');
      return;
    }
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: FileListCustom) {
    // @ts-ignore
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = '';
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const index = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, index)).toFixed(dm)) +
      ' ' +
      sizes[index]
    );
  }
}

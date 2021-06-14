/* eslint-disable @angular-eslint/component-selector */
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'cdk-fullscreen',
  template: ` <button
    mat-icon-button
    [fxHide]="true"
    [fxHide.gt-xs]="false"
    (click)="toggleFullscreen()"
  >
    <mat-icon *ngIf="!isFullscreen">fullscreen</mat-icon>
    <mat-icon *ngIf="isFullscreen">fullscreen_exit</mat-icon>
  </button>`,
})
export class FullscreenComponent {
  public element: any;
  isFullscreen: boolean = false;
  constructor(@Inject(DOCUMENT) private document: any) {
    this.element = document.documentElement;
  }

  public toggleFullscreen() {
    this.isFullscreen ? this.closeFullscreen() : this.openFullscreen();

    this.isFullscreen = !this.isFullscreen;
  }
  private openFullscreen() {
    if (this.element.requestFullscreen) {
      this.element.requestFullscreen();
    } else if (this.element.mozRequestFullScreen) {
      /* Firefox */
      this.element.mozRequestFullScreen();
    } else if (this.element.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.element.webkitRequestFullscreen();
    } else if (this.element.msRequestFullscreen) {
      /* IE/Edge */
      this.element.msRequestFullscreen();
    }
  }
  /* Close fullscreen */
  private closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}

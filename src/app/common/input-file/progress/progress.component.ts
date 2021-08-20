import { Component, Input } from '@angular/core';

@Component({
  selector: 'atm-progress',
  template: `<div class="progress-cont">
    <div class="progress" [style.width]="progress + '%'"> </div>
  </div>`,
  styles: [
    `
      .progress-cont {
        height: 7px;
        width: 100%;
        border-radius: 4px;
        background-color: #d0d0d0;
        position: relative;
      }
      .progress-cont .progress {
        width: 0;
        height: 100%;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        border-radius: 4px;
        background-color: #4c97cb;
        transition: 0.5s all;
      }
    `,
  ],
})
export class ProgressComponent {
  @Input()
  progress: number;

  constructor() {
    this.progress = 0;
  }
}

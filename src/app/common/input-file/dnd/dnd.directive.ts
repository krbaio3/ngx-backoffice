import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[atmDnd]',
})
export class DndDirective {
  @HostBinding('class.fileover')
  fileOver: boolean = false;

  @Output() fileDropped: EventEmitter<FileList> = new EventEmitter<FileList>();

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
    let files = event.dataTransfer!.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}

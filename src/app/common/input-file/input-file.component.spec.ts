import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFileComponent } from './input-file.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ProgressComponent } from './progress/progress.component';
import { DndDirective } from './dnd/dnd.directive';

describe('InputFileComponent', () => {
  let component: InputFileComponent;
  let fixture: ComponentFixture<InputFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ InputFileComponent, ProgressComponent, DndDirective ],
      imports: [MatIconModule, FlexLayoutModule, MatButtonModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('methods specs', () => {
    test('should call to prepareFulesList WHEN exec onFileDropped', async () => {
      // Arrange
      const files = [{
        progress: 100
      }, {
        progress: 0
      }] as any as FileList;
      const spy= jest.spyOn(component, 'prepareFilesList')
      // Act
      component.onFileDropped(files);
      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenLastCalledWith(files);
    });

    test('should call to prepareFulesList WHEN exec fileBrowseHandler', async () => {
      // Arrange
      let files = [{
        progress: 100
      }, {
        progress: 0
      }];

      let event = {
        target: {
          files,
        },
      } as unknown as Event;
      const spy= jest.spyOn(component, 'prepareFilesList')
      // Act
      component.fileBrowseHandler(event);
      // Assert
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenLastCalledWith(files);
    });

    test('should remove item list WHEN call deleteFile', async () => {
      // Arrange
      const n = 0;

      const files = [{
        progress: 100
      }, {
        progress: 0
      }];

      // Act
      component.files = [...files];

      fixture.detectChanges();

      component.deleteFile(n);

      files.splice(n, 1);

      // Assert
      expect(component.files).toEqual(files);
    });

    test('should NOT remove item list WHEN call deleteFile', async () => {
      // Arrange
      const n = 1;

      const files = [{
        progress: 50
      }, {
        progress: 0
      }];

      // Act
      component.files = files;

      fixture.detectChanges();

      component.deleteFile(n);

      fixture.detectChanges();

      // Assert
      expect(component.files).toEqual(files);
    });

    test('should call prepareFilesList WHEN call fileBrowseHandler', async () => {
      // Arrange
      let files = [{
        progress: 100
      }, {
        progress: 0
      }];

      let event = {
        target: {
          files,
        },
      } as unknown as Event;

      const spy = jest.spyOn(component, 'prepareFilesList');
      // Act
      component.fileBrowseHandler(event);
      // Assert
      expect(spy).toHaveBeenLastCalledWith(files);
    });

    test('should return "0 bytes" WHEN call formatBytes with 0', () => {
      // Arrange
      // Act
      // Assert
      expect(component.formatBytes(0)).toEqual('0 Bytes');
    });

    test('should simulate upload file WHEN uploadFilesSimulator', () => {
      // Arrange
      jest.useFakeTimers();
      let files = [{
        progress: 95
      }, {
        progress: 0
      }];

      const spySetTime = jest.spyOn(window, 'setTimeout');
      const spySetInterval = jest.spyOn(window, 'setInterval');
      const spyClearInterval = jest.spyOn(window, 'clearInterval');

      // Act
      component.files = files;
      component.uploadFilesSimulator(0);

      jest.runOnlyPendingTimers();

      // Assert
      expect(spySetTime).toHaveBeenCalledTimes(1);
      expect(spySetTime).toHaveBeenLastCalledWith(expect.any(Function), 1000);

      jest.runOnlyPendingTimers();

      // Assert
      expect(spySetInterval).toHaveBeenCalledTimes(1);
      expect(spySetInterval).toHaveBeenLastCalledWith(expect.any(Function), 200);
      expect(component.files[0].progress).toEqual(100);

      jest.runOnlyPendingTimers();

      expect(spyClearInterval).toHaveBeenCalledTimes(1);
    });
  });
});

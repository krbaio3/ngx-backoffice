import { DndDirective } from './dnd.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component(({
  template: `
    <div atmDnd (fileDropped)="onFileDropped($event)">
    </div>`
}))
class TestComponent{
  public value: boolean =false;
  onFileDropped($event: FileList) {
    this.value = true;
  }
}

describe('DndDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  let div: DebugElement;
  let divEl: DebugElement['nativeElement'];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ DndDirective, TestComponent ]
    })
      .createComponent(TestComponent);

    component = fixture.componentInstance;

    fixture.detectChanges(); // initial binding

    div = fixture.debugElement.query(By.directive(DndDirective));

  });

  test('should create an instance', () => {
    const directive = new DndDirective();
    expect(directive).toBeTruthy();
  });

  test('should create one elements with directive atmDnd', async () => {
    // Arrange
    // Act
    // Assert
    expect(div).toBeTruthy();
  });

  test('should trigger the dragover event WHEN dragover', async () => {
    // Arrange
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    // Act
    div.triggerEventHandler('dragover', event);

    // Al lanzar el evento, detectamos los cambios
    fixture.detectChanges();

    // Otra forma de hacerlo
    // const badge: HTMLElement = fixture.debugElement.query(By.css('.fileover')).nativeElement;

    // Detectamos en las clases del contenedor que se encuentre la clase fileover
    divEl = div.nativeElement.classList.contains('fileover');

    // Assert
    expect(event.preventDefault).toBeCalled();
    expect(event.stopPropagation).toBeCalled();
    expect(divEl).toBeTruthy();
  });

  test('should trigger the dragleave event WHEN dragleave', async () => {
    // Arrange
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    // Act
    div.triggerEventHandler('dragleave', event);

    // Al lanzar el evento, detectamos los cambios
    fixture.detectChanges();

    // Otra forma de hacerlo
    // const badge: HTMLElement = fixture.debugElement.query(By.css('.fileover')).nativeElement;

    // Detectamos en las clases del contenedor que si se encuentra la clase fileover
    divEl = div.nativeElement.classList.contains('fileover');

    // Assert
    expect(event.preventDefault).toBeCalled();
    expect(event.stopPropagation).toBeCalled();
    expect(divEl).toBeFalsy();
  });

  test('should trigger the drop event WHEN drop', async () => {
    // Arrange
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        files: ['test']
      }
    };

    const spy = jest.spyOn(component, 'onFileDropped');

    // Comprobamos que el componente tiene a false la propiedad para testear luego
    expect(component.value).toBeFalsy();

    // Act
    div.triggerEventHandler('drop', event);

    // Al lanzar el evento, detectamos los cambios
    fixture.detectChanges();

    // Otra forma de hacerlo
    // const badge: HTMLElement = fixture.debugElement.query(By.css('.fileover')).nativeElement;

    // Detectamos en las clases del contenedor que si se encuentra la clase fileover
    divEl = div.nativeElement.classList.contains('fileover');


    // Assert
    expect(event.preventDefault).toBeCalled();
    expect(event.stopPropagation).toBeCalled();
    expect(divEl).toBeFalsy();
    expect(spy).toHaveBeenCalled();
    expect(component.value).toBeTruthy();
  });
});

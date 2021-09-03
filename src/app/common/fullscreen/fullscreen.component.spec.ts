import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullscreenComponent } from './fullscreen.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('FullscreenComponent', () => {
  let component: FullscreenComponent;
  let fixture: ComponentFixture<FullscreenComponent>;
  let fScreenDebug: DebugElement;
  let hfScreenElement: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FullscreenComponent],
      imports: [FlexLayoutModule, MatIconModule, MatButtonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Debería de poner el flag a true si se llama toggleFullScreen()', async () => {
    // Arrange
    const toggleFullScreenSpy = jest.spyOn(component, 'toggleFullscreen');
    // capturamos el valor inicial
    const isFull = component.isFullscreen;

    // Act
    component.toggleFullscreen();

    // Assert
    expect(toggleFullScreenSpy).toHaveBeenCalled();
    // comprobamos que se inicia en false
    expect(isFull).toBeFalsy();
    // comprobamos que se cambia el valor
    expect(component.isFullscreen).toBeTruthy();
  });

  test('Debería de llamar a la función element.requestFullscreen()', async () => {
    // Arrange
    const toggleFullScreenSpy = jest.spyOn(component, 'toggleFullscreen');
    component.element.requestFullscreen = jest.fn().mockImplementation(() => true);
    //@ts-ignore
    const elementSpy = jest.spyOn(component.element, 'requestFullscreen');

    // capturamos el valor inicial
    const isFull = component.isFullscreen;

    // Act
    component.toggleFullscreen();

    // Assert
    expect(toggleFullScreenSpy).toHaveBeenCalled();
    expect(elementSpy).toHaveBeenCalled();
    // comprobamos que se inicia en false
    expect(isFull).toBeFalsy();
    // comprobamos que se cambia el valor
    expect(component.isFullscreen).toBeTruthy();
  });

  test('Debería de cambiar el icono cuando se llama a toggleFullscreen()', async () => {
    // Arrange
    const toggleFullScreenSpy = jest.spyOn(component, 'toggleFullscreen');

    fScreenDebug = fixture.debugElement;
    hfScreenElement = fScreenDebug.nativeElement;
    fixture.detectChanges();

    // capturamos el valor inicial
    const isFull = component.isFullscreen;

    // const button = fScreenDebug.queryAll(By.css('button'));
    const button = fixture.nativeElement.querySelector('button');
    const iconRun = fScreenDebug.queryAll(By.css('mat-icon'))[0].attributes['aria-label'];

    // Act

    expect(iconRun).toEqual('fullscreen_icon_run');

    button.click();
    fixture.detectChanges();


    const iconExit = fScreenDebug.queryAll(By.css('mat-icon'))[0].attributes['aria-label'];

    // Assert
    expect(toggleFullScreenSpy).toHaveBeenCalled();
    // comprobamos que se inicia en false
    expect(isFull).toBeFalsy();
    // comprobamos que se cambia el valor
    expect(component.isFullscreen).toBeTruthy();
    // comprobamos que el icono, y el aria-label ha cambiado
    expect(iconExit).toEqual('fullscreen_icon_exit');
  });
});

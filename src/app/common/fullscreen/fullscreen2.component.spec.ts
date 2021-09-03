import { FullscreenComponent } from './fullscreen.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

describe('FullscreenComponent', () => {
  let component: FullscreenComponent;
  let fixture: ComponentFixture<FullscreenComponent>;
  let fixtureHTML: ComponentFixture<FullscreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FullscreenComponent],
      imports: [FlexLayoutModule, MatIconModule, MatButtonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenComponent);
    fixtureHTML = TestBed.createComponent(FullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should render the component', async () => {
    expect(component).toBeTruthy();
  });

  test('should call to mozRequestFullscreen WHEN de browser is FF and click fullscreen button', async () => {
    // Arrange
    component.element = {
      mozRequestFullScreen: jest.fn(),
      mozCancelFullScreen: jest.fn(),
    } as any;

    const spyMozRequest = jest.spyOn(component.element, 'mozRequestFullScreen' as never);
    // const spyMozCancel = jest.spyOn(document, 'mozCancelFullScreen' as never);

    // Act
    fixture.detectChanges();
    component.toggleFullscreen();
    fixture.detectChanges();
    const isF = component.isFullscreen;

    // Assert
    expect(isF).toBeTruthy();
    expect(spyMozRequest).toHaveBeenCalledTimes(1);

    // Act
    component.toggleFullscreen();
    fixture.detectChanges();

    // Assert
    expect(component.isFullscreen).toBeFalsy()
  });
  test('should call to webkitRequestFullscreen WHEN de browser is Chrome and click fullscreen button', async () => {
    // Arrange
    component.element = {
      webkitRequestFullscreen: jest.fn(),
      webkitExitFullscreen: jest.fn(),
    } as any;

    const spyWebKitRequest = jest.spyOn(component.element, 'webkitRequestFullscreen' as never);

    // Act
    fixture.detectChanges();
    component.toggleFullscreen();
    fixture.detectChanges();
    const isF = component.isFullscreen;

    // Assert
    expect(isF).toBeTruthy();
    expect(spyWebKitRequest).toHaveBeenCalledTimes(1);

    // Act
    component.toggleFullscreen();
    fixture.detectChanges();

    // Assert
    expect(component.isFullscreen).toBeFalsy()
  });
  test('should call to msRequestFullscreen WHEN de browser is MS and click fullscreen button', async () => {
    // Arrange
    component.element = {
      msRequestFullscreen: jest.fn(),
      msExitFullscreen: jest.fn(),
    } as any;

    const spyMSRequest = jest.spyOn(component.element, 'msRequestFullscreen' as never);

    // Act
    fixture.detectChanges();
    component.toggleFullscreen();
    fixture.detectChanges();
    const isF = component.isFullscreen;

    // Assert
    expect(isF).toBeTruthy();
    expect(spyMSRequest).toHaveBeenCalledTimes(1);

    // Act
    component.toggleFullscreen();
    fixture.detectChanges();

    // Assert
    expect(component.isFullscreen).toBeFalsy()
  });
});

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuComponent } from './user-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';

class MockElementRef extends ElementRef {
  constructor() {
    //@ts-ignore
    super(undefined);
  }
}
describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;
  let elRef: ElementRef;


  beforeEach(waitForAsync(() => {
    const elementRefStub = () =>({
      nativeElement: {
        contains: (f:any) => true,
      }
    });
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [
        UserMenuComponent,
        ],
      imports: [
        MatIconModule,
        MatButtonModule,
        MatListModule,
        FlexLayoutModule
      ],
      // providers: [{provide: ElementRef, useClass: MockElementRef}]
      providers: [ { provide: ElementRef, useValue: elementRefStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    // elRef = TestBed.inject(ElementRef);
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onClick specs', () => {
    test('should return undefined WHEN call onClick method with targetElement undefined', async () => {
      // Arrange
      const targetElementMock = undefined as any as HTMLElement;
      const eventMock = jest.fn() as any as MouseEvent;

      // Act
      const result = component.onClick(eventMock, targetElementMock);
      // Assert
      expect(result).toBeUndefined();
    });
    test('should change isOpen value to false WHEN call onClick method with a targetElement', () => {
      // Arrange
      const targetElementMock = document.createElement('div');
      const eventMock = jest.fn() as any as MouseEvent;
      const isOpenInitValue = component.isOpen;


      // Act
      const result = component.onClick(eventMock, targetElementMock);
      fixture.detectChanges();
      const isOpenFinishValue = component.isOpen;

      // Assert
      expect(isOpenInitValue).toBeFalsy();
      expect(isOpenFinishValue).toBeFalsy();
      expect(result).toBeUndefined();
    });
  });
});

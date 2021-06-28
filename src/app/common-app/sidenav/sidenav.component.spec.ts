import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { CommonModule } from '@angular/common';
jest.mock('@angular/material/sidenav', ()=>{
  const original = jest.requireActual('@angular/material/sidenav');
  return {
    ...original,
    MatSidenav: jest.fn(),
  }
});
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonExtensionModule } from '../../common/common-extension.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SidenavService } from './sidenav.service';



describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let service: SidenavService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavComponent ],
      imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        CommonExtensionModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        NgScrollbarModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SidenavService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should inject the service SidenavService when SidenavComponent is created', () => {
    expect(service).toBeTruthy();
  });

  test('should set Sidenav WHEN call afterViewInit', async () => {
    // Arrange
    const mockSidenav = MatSidenav;
    const spySideNav = jest.spyOn(service, 'setSidenav');
    component.sidenav = mockSidenav as any;
    fixture.detectChanges();

    // Act
    component.ngOnInit();
    component.ngAfterViewInit();

    // Assert
    expect(spySideNav).toHaveBeenCalledTimes(1);
    expect(spySideNav).toHaveBeenCalledWith(mockSidenav);

  });

  test('should show/hide the Sidenav WHEN click button and trigger handleClickToggle', async () => {
    // Arrange

    // Act
    // Assert
  });
});

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuItemComponent } from './side-menu-item.component';

xdescribe('SidemenuItemComponent', () => {
  let component: SideMenuItemComponent;
  let fixture: ComponentFixture<SideMenuItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

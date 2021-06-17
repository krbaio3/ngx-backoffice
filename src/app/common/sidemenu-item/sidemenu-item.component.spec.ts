import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuItemComponent } from './sidemenu-item.component';

xdescribe('SidemenuItemComponent', () => {
  let component: SidemenuItemComponent;
  let fixture: ComponentFixture<SidemenuItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMenuItemComponent } from './filter-menu-item.component';

describe('FilterMenuItemComponent', () => {
  let component: FilterMenuItemComponent;
  let fixture: ComponentFixture<FilterMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

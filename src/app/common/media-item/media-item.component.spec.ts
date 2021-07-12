import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemComponent } from './media-item.component';
import { MatIconModule } from '@angular/material/icon';
import { CapitalizeSpacePipe } from '../pipe/capitalize-space.pipe';

describe('MediaMenuComponent', () => {
  let component: MediaItemComponent;
  let fixture: ComponentFixture<MediaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaItemComponent, CapitalizeSpacePipe ],
      imports:[
        MatIconModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

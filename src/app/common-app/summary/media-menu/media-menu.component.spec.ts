import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaMenuComponent } from './media-menu.component';
import { MediaItemComponent } from '../../../common/media-item/media-item.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MatIconModule } from '@angular/material/icon';

describe('MediaMenuComponent', () => {
  let component: MediaMenuComponent;
  let fixture: ComponentFixture<MediaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaMenuComponent, MediaItemComponent ],
      imports: [
        MatIconModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

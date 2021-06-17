

import { FullscreenComponent } from './fullscreen.component';
import { render, screen } from '@testing-library/angular';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


xdescribe('FullscreenComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FullscreenComponent],
      imports: [FlexLayoutModule, MatIconModule, MatButtonModule]
    })
      .compileComponents();
  }));
  test('renderizar con testing library', async () => {
    // Renderizo el componente
    await render( FullscreenComponent);

    // recupero el botón
    const value = screen.getByLabelText('fullscreen-button');

    value.click()

    expect(screen.getByLabelText('fullscreen-button'));

  });
});

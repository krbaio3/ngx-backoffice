import { RenderResult, render, screen } from '@testing-library/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: RenderResult<SearchBarComponent>;

  beforeEach(async () => {
    component = await render(SearchBarComponent, {
      componentProperties: {
        open: false
      },
      imports: [
        // MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    });
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test(' should create a component with angular-library', async () => {
    // Arrange
    const { getByLabelText } = component;

    // Act
    const input = getByLabelText('buscador');
    input.focus();

    // Assert
    expect(screen.getByLabelText('buscador')).toHaveFocus();
  });

  test(' should change property bigMenu when focus', async () => {
    // Arrange
    const { getByLabelText,  fixture } = component;
    const searchBarComponent = fixture.componentInstance as SearchBarComponent;

    // Act
    const input = getByLabelText('buscador');
    input.focus();

    // Assert
    expect(screen.getByLabelText('buscador')).toHaveFocus();
    expect(searchBarComponent.bigMenu).toBeTruthy();
  });

  test(' should have a "search-open" class when open=true', async () => {
    // Arrange
    const { getByLabelText,  fixture } = component;
    const searchBarComponent = fixture.componentInstance as SearchBarComponent;
    const matFormSearchClass = screen.getByTestId('mat-form-search-class');

    // Act
    const input = getByLabelText('buscador');
    input.focus();
    searchBarComponent.open = true;

    // Assert
    expect(screen.getByLabelText('buscador')).toHaveFocus();
    expect(searchBarComponent.bigMenu).toBeTruthy();
    expect(searchBarComponent.open).toBeTruthy();
    expect(matFormSearchClass).toHaveClass('search-open');
  });
});

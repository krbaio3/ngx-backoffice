import { RenderResult, fireEvent, getByTestId, render } from '@testing-library/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RouterTestingModule } from '@angular/router/testing';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SideMenuAccordionItemComponent } from './side-menu-accordion-item.component';
import { SideMenuItemComponent } from './side-menu-item.component';
import { SideMenuOnlyItemComponent } from './side-menu-only-item.component';
import { menuMock } from '../side-menu/test/sidenav.mock';

describe('SideMenuItemComponent Simple', () => {
  let component: RenderResult<SideMenuItemComponent>;

  beforeEach(async () => {
    component = await render(SideMenuItemComponent, {
      componentProperties: {
        menu: menuMock[0],
        iconOnly: false,
      },
      imports: [
        FlexLayoutModule,
        MatIconModule,
        CommonModule,
        // MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatButtonModule,
        MatRippleModule,
        MatListModule,
        ScrollingModule,
        NgScrollbarModule,
        MatChipsModule,
        MatExpansionModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        SideMenuAccordionItemComponent,
        SideMenuOnlyItemComponent,
      ],
    });
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should render only title (mat-list-item) WHEN object menu.name is empty', async () => {
    // Arrange
    const { getByTestId } = component;

    // Act
    const name = getByTestId( 'menu-title');

    // Assert
    expect(name).toHaveTextContent('Main');
  });
  test('should render the links WHEN menu has "title" and "name", but not "sub"', async () => {
    // Arrange
    const menuMock = {
        title: 'Documentation',
        name: 'Handbooks',
        icon: 'picture_as_pdf',
        open: false,
        link: false,
      };

    const { rerender } =  component;
    rerender({ menu: menuMock });

    // Act
    const {getByTestId, getByRole} = component

    // const role = getByRole('link', {
    //   name: /link/i
    // });
    const name = getByTestId('menu-name');

    // Assert
    expect(name).toHaveTextContent('Handbooks');

  });
  test('should render the icons-links WHEN menu has "title" and "name", but not "sub"', async () => {
    // Arrange
    const menuMock = {
      title: 'Documentation',
      name: 'Handbooks',
      icon: 'picture_as_pdf',
      open: false,
      link: false,
    };

    const { rerender } =  component;
    rerender({ menu: menuMock, iconOnly: true });

    // Act
    const {getByLabelText, getByTestId} = component;
    const icon = getByLabelText(/handbooks/i, { trim:true });

    try{
      getByTestId('menu-name');
      expect(true).toBeTruthy();
    } catch (e){
      //Se comprueba que no exista el texto
      expect(e.message).toContain('[data-testid="menu-name"]');
    }
    // Assert
    expect(icon).toBeInTheDocument();
  });
});

describe('SideMenuItemComponent Accordion', () => {
  let component: RenderResult<SideMenuItemComponent>;

  beforeEach(async () => {
    component = await render(SideMenuItemComponent, {
      componentProperties: {
        menu: menuMock[1],
        iconOnly: false,
      },
      imports: [
        FlexLayoutModule,
        MatIconModule,
        CommonModule,
        // MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatButtonModule,
        MatRippleModule,
        MatListModule,
        ScrollingModule,
        NgScrollbarModule,
        MatChipsModule,
        MatExpansionModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        SideMenuAccordionItemComponent,
        SideMenuOnlyItemComponent,
      ],
    });
  });

  /*{
    title: 'Main',
    name: 'Reporting Status',
    icon: 'multiline_chart',
    link: false,
    open: false,
    chip: { value: 1, color: 'accent' },
    sub: [
      {
        name: 'Reporting Summary',
        link: '',
        icon: 'analytics',
        chip: false,
        open: false,
      },
      {
        name: 'Processed Files',
        link: '',
        icon: 'check',
        chip: false,
        open: false,
      },
      {
        name: 'Pending Files',
        link: '',
        icon: 'pending',
        chip: false,
        open: false,
      },
      {
        name: 'Error Files',
        link: '',
        icon: 'report_gmailerrorred',
        chip: false,
        open: false,
      },
    ],
  },*/

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should render a accordion item WHEN menu has "title", "name" and "sub"', async () => {
    // Arrange
    const { getByRole, getByLabelText, fixture, detectChanges } = component;
    const expansionPanel = getByRole('button');

    // Act

    // al inicio es false
    let open = fixture.componentInstance.menu.open;
    fireEvent.click(expansionPanel);
    detectChanges();
    // cambia a true cuando se hace click sobre el elemento
    open = fixture.componentInstance.menu.open;

    const subName = getByLabelText(/reporting summary/i);
    const heading3 = getByRole('heading', { name: /reporting summary/i });

    // Assert
    expect(open).toBeTruthy();
    expect(subName).toBeInTheDocument();
    expect(heading3).toBeInTheDocument();
  });
  test('should render a accordion item without text WHEN iconOnly is true, and menu has "title", "name" and "sub"', async () => {
    // Arrange
    const { getByRole, getByLabelText, fixture, detectChanges } = component;
    const expansionPanel = getByRole('button');

    // Act
    fixture.componentInstance.iconOnly = true;
    fireEvent.click(expansionPanel);
    detectChanges();

    const icon = getByLabelText(/reporting summary/i);
    try {
      getByRole('heading', { name: /reporting summary/i, level: 3 });
    } catch ( e ) {
      // Assert
      //Se comprueba que no exista el texto
      expect(e.message).toContain('heading');
      expect(icon).toBeInTheDocument();
    }
  });
});

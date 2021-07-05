import { ToolbarNotificationComponent } from './toolbar-notification.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { fireEvent, render, RenderResult } from '@testing-library/angular';
import { SideMenuItemComponent } from '../side-menu-item/side-menu-item.component';
import { menuMock } from '../side-menu/test/sidenav.mock';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuAccordionItemComponent } from '../side-menu-item/side-menu-accordion-item.component';
import { SideMenuOnlyItemComponent } from '../side-menu-item/side-menu-only-item.component';

describe('ToolbarNotificationComponent', () => {
  let component: RenderResult<ToolbarNotificationComponent>;

  beforeEach(async () => {
    component = await render(ToolbarNotificationComponent,{
      componentProperties: {
        notifications: [
          {
            id: '1',
            title: 'Notificacion 1',
            lastTime: '12:00',
            state: 'test'
          },
          {
            id: '2',
            title: 'Notificacion 2',
            lastTime: '12:00',
            state: 'test'
          },
          {
            id: '3',
            title: 'Notificacion 3',
            lastTime: '12:00',
            state: 'test'
          }
        ]
      },
      imports: [
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        NgScrollbarModule
      ],
    });
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
  test('should open the notifications WHEN click in icon', async () => {
    // Arrange
    const { getAllByRole, fixture, getByTestId } = component;

    // Act
    const button = getAllByRole('button')[0];
    fireEvent.click(button);
    // Assert
    expect(button).toHaveClass('open');
    expect(fixture.componentInstance.notifications.length).toEqual(3);
    expect(getByTestId('card')).toHaveClass('open');
  });

  test('should render 3 notifications with height 195px', async () => {
    // Arrange
    const { fixture} = component;
    const height = fixture.componentInstance.calcHeight();
    // Act
    // Assert
    expect(fixture.componentInstance.notifications.length).toEqual(3);
    expect(height).toEqual('195px');
  });
  test('should remove the notification WHEN click in close icon', async () => {
    // Arrange
    const { getAllByLabelText } = component;
    // Act
    const closeBtn1 = getAllByLabelText('close')[0];
    fireEvent.click(closeBtn1);
    // Assert
    expect(component.fixture.componentInstance.notifications.length).toEqual(2)
  });

  test('should remove all notifications WHEN click Mark all as read button', async () => {
    // Arrange
    const {getByLabelText} = component;

    const mark = getByLabelText('mark-all-read');

    // Act
    fireEvent.click(mark);
    // Assert
    expect(component.fixture.componentInstance.notifications.length).toEqual(0)
  });
});

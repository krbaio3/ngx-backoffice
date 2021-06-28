import { ToolbarNotificationComponent } from './toolbar-notification.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgScrollbarModule } from 'ngx-scrollbar';
// import { ToolbarNotificationModel } from './toolbar-notification.model';
import { fireEvent, render, RenderResult } from '@testing-library/angular';
import exp from 'constants';

describe('ToolbarNotificationComponent', () => {
  let component: RenderResult<ToolbarNotificationComponent>;

  beforeEach(async () => {
    component = await render(ToolbarNotificationComponent, {
      componentProperties: {
        notifications: [
          {
            title: 'Notificacion 1',
            lastTime: '12:00'
          },
          {
            title: 'Notificacion 2',
            lastTime: '12:00'
          },
          {
            title: 'Notificacion 3',
            lastTime: '12:00'
          }
        ]
      },
      imports: [
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        NgScrollbarModule
      ],
    })
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

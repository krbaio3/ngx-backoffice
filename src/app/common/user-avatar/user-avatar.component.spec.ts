import { render, RenderResult, screen } from '@testing-library/angular';
import { UserAvatarComponent } from './user-avatar.component';
import { currentUserMock } from './user-avatar.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserAvatar', () => {
  let component: RenderResult<UserAvatarComponent>;

  beforeEach(async () => {
    component = await render(UserAvatarComponent, {
      componentProperties: {
        currentUser: currentUserMock
      },
      imports: [
        BrowserAnimationsModule
      ]
    });
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test(' should create a component with angular-library', async () => {
    // Arrange
    const { getByRole,getByText } = component;

    // Act
    const user = getByText('John Doe', { exact: true});
    const img = getByRole('img');

    // Assert
    expect(user).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  test(' should create a component with John Doe as name', async () => {
    // Arrange
    const { getByText, fixture } = component;
    const userAvatar = fixture.componentInstance

    // Act
    const user = getByText('John Doe', { exact: true});

    // Assert
    expect(user).toBeInTheDocument();
    expect(userAvatar.currentUser).toEqual(currentUserMock);
  });
});

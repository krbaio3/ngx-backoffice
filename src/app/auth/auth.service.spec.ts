import { TestBed } from '@angular/core/testing';

import { AuthAppService } from './auth.service';
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService, AuthToken } from "@atmira/authentication";

describe('AuthAppServiceService', () => {
  let service: AuthAppService;
  let spy: any;

  beforeEach(() => {
    const miSpy = jest.spyOn(AuthAppService.prototype, 'loginKeycloak')
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{
        provide: AuthService, useValue: miSpy,
      }]
    });
    service = TestBed.inject(AuthAppService);
    spy = TestBed.inject(AuthService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test("should return the token as string WHEN call getToken method", async () => {
    // Arrange
    const AUTH_APP_TOKEN = {"name":"auth:oauth2:token","ownerStrategyName":"keycloak","createdAt":1630501063254,"value":"{\"access_token\":\"ey\",\"expires_in\":600,\"refresh_expires_in\":1800,\"refresh_token\":\"ey\",\"token_type\":\"Bearer\",\"id_token\":\"ey\",\"not-before-policy\":1621502314,\"session_state\":\"cd742c4b-50b5-4c4d-a12d-441dccb60412\",\"scope\":\"openid profile email\"}"}

    localStorage.setItem('auth_app_token', JSON.stringify(AUTH_APP_TOKEN));
    // Act
    const result = service.getToken();

    // Assert
    expect(result).toEqual('ey');
  });

  test("should call to authService WHEN call loginKeycloak method", async () => {
    // Arrange
    const spy = jest.spyOn(AuthAppService.prototype, 'loginKeycloak').mockImplementation(()=> true);

    // Act
    service.loginKeycloak();

    // Assert
    expect(spy).toHaveBeenCalled();
  });

  test("should call to authService WHEN call tokenChangeKeyCloak", async () => {
    // Arrange
    const spy = jest.spyOn(AuthAppService.prototype, 'tokenChangeKeyCloak').mockImplementation(()=> true);

    // Act
    service.tokenChangeKeyCloak()

    // Assert
    expect(spy).toHaveBeenCalled();
  });

});

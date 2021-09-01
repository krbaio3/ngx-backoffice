import { AuthToken } from '@atmira/authentication';
import { Component, OnInit } from '@angular/core';

import { AuthAppService } from './auth.service';

@Component({
  template: ``,
})
export class OAuth2LoginComponent implements OnInit {
  public token!: AuthToken | undefined;

  constructor(private authAppService: AuthAppService) {
    this.authAppService.tokenChangeKeyCloak();
  }

  ngOnInit(): void {
    this.authAppService.loginKeycloak();
  }
}

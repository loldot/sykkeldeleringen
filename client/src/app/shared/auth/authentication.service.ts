import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenKey } from '@angular/core/src/view';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { } from 'adal';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  static endpoint = `${environment.apiEndpoint}/account/`;
  static tokenKey = 'sdr_jwt_token';
  static config: adal.Config = {
    clientId: '4c7d2b28-04b4-4627-9111-f7ddd0662fdb',
    tenant: 'c317fa72-b393-44ea-a87c-ea272e8d963d',
    popUp: true,
    redirectUri: 'http://localhost:4200/'
  };

  private authContext: adal.AuthenticationContext;

  constructor(private http: HttpClient, private router: Router) {
    this.authContext = new AuthenticationContext(AuthenticationService.config);
  }

  signIn() {
    if (!this.authContext.loginInProgress()) {
      this.authContext.login();
    }
  }
  signOut() {
    this.authContext.logOut();
  }

  isSignedIn(): boolean {
    return !!this.authContext.getCachedUser();
  }
  
  getToken(resource): string {
    return this.authContext.getCachedToken(AuthenticationService.config.clientId);
  }
  refreshToken(resource): Promise<string> {
    let ctx = this.authContext;
    console.log('refreshing token');
    return new Promise<string>(function (resolve, reject) {
        ctx.acquireToken(AuthenticationService.config.clientId, (message, token) => {
          if (token)
            resolve(token);
          else
            reject(message);
        });
    });
  }
  getCurrentUsername(): string {
    var user = this.authContext.getCachedUser();
    
    return user ? user.userName : '';
  }
}
class LoginDTO {
  constructor(public email: string, public password: string) { }
}
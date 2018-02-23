import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenKey } from '@angular/core/src/view';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
  static endpoint = `${environment.apiEndpoint}/account/`;
  static tokenKey = 'sdr_jwt_token';

  constructor(private http: HttpClient) {
  }

  signIn(username: string, password: string) {
    console.log(username);
    let loginDto = new LoginDTO(username, password);
    this.http.post(`${AuthenticationService.endpoint}login`, loginDto, { responseType: 'text' })
      .subscribe(this.setToken);
  }
  signOut() {
    localStorage.removeItem(AuthenticationService.tokenKey);
  }

  triggerSignIn() {
    //window.location.replace('/login');
  }

  isSignedIn(): boolean {
    return !!this.getToken();
  }

  setToken(token: string) {
    console.log('received token: ' + token.substr(0, 64));
    localStorage.setItem(AuthenticationService.tokenKey, token);
  }
  getToken(): string {
    return localStorage.getItem(AuthenticationService.tokenKey);
  }
  refreshToken(): any {
    console.log('refresh token here..');
  }
}
class LoginDTO {
  constructor(public email: string, public password: string) { }
}
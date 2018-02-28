import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenKey } from '@angular/core/src/view';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  static endpoint = `${environment.apiEndpoint}/account/`;
  static tokenKey = 'sdr_jwt_token';

  constructor(private http: HttpClient, private router: Router) {
  }

  signIn(username: string, password: string) {
    console.log(username);
    let loginDto = new LoginDTO(username, password);
    this.http.post(`${AuthenticationService.endpoint}login`, loginDto, { responseType: 'text' })
      .subscribe(this.setToken);
  }
  signOut() {
    localStorage.removeItem(AuthenticationService.tokenKey);
    this.router.navigate(['/']);
  }

  triggerSignIn() {
    this.router.navigate(['/users/login']);
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
  getCurrentUsername(){
    let token = this.getToken();
    if(!token) return null;

    let jwtParts = token.split('.');
    let claims = JSON.parse(atob(jwtParts[1]));
    
    return claims.sub;
  }
}
class LoginDTO {
  constructor(public email: string, public password: string) { }
}
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthenticateRequestInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.authService.getToken();
        
        if (req.url.startsWith(environment.apiEndpoint) && token) {
            let headers = new HttpHeaders({
                'Authorization': `Bearer ${token}`
            });

            let authenticatedRequest = req.clone({ headers });
            return next.handle(authenticatedRequest);
        }
        else {
            return next.handle(req);
        }
    }
}

@Injectable()
export class ChallengeInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).catch(error => {
            if (error instanceof HttpErrorResponse) {
                if (error.status === 401) {
                    console.log(`401 for ${req.url}`);
                    this.authService.refreshToken();
                }
            }
            return Observable.throw(error);
        });
    }
}
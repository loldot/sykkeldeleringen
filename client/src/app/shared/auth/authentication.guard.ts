import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private auth: AuthenticationService, private router : Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var isAuthorized = this.auth.isSignedIn();
        if(!isAuthorized){
            this.auth.signIn();
        }
        return isAuthorized;
    }
}
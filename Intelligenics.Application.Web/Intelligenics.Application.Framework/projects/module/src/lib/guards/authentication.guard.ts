// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

/**
 * The authentication guard is used by the provided to the routing framework
 * to handle users that are not logged into the system. It will forward them
 * to the login screen when currently logged out.
 */
@Injectable(
    {
        providedIn: 'root'
    } )
export class AuthenticationGuard implements CanActivate, CanActivateChild
{
    constructor( private readonly authenticationService: AuthenticationService )
    {
    }

    /**
     * This method ensures that the view cannot be accessed unless the user is logged in
     * @param route the current activated route shapshot
     * @param state the current activated router state
     */
    public canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean
    {
        if ( !this.authenticationService.isEnabled )
            return true;

        if ( this.authenticationService.isEnabled && this.authenticationService.isSignedIn )
            return true;

        this.authenticationService.navigateToSignIn();

        return false;
    }

    /**
     * This method ensures that the child view cannot be accessed unless the user is logged in
     * @param childRoute the current activated child route shapshot
     * @param state the current activated router state
     */
    public canActivateChild( childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean
    {
        if ( !this.authenticationService.isEnabled )
            return true;

        if ( this.authenticationService.isEnabled && this.authenticationService.isSignedIn )
            return true;

        this.authenticationService.navigateToSignIn();

        return false;
    }
}

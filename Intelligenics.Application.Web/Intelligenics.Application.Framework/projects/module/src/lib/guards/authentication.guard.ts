//////////////////////////////////////////////////////////////////////////
///
/// Intelligenics Angular Application Framework
/// Copyright(C) 2019 Intelligenics Ltd.  
/// 
/// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
/// to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute,
/// sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
/// subject to the following conditions:
/// 
/// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
/// 
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
/// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
/// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
/// 
/// Contact Information
/// 
/// Name: Matthew Parton M.Sc.
/// Feel free to contact me using the following details

/// LinkedIn Profile: https://www.linkedin.com/in/intelligenics/
/// Website: http://www.intelligenics.co.uk
/// Email: matthewparton@intelligenics.co.uk
///
//////////////////////////////////////////////////////////////////////////

import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';

/**
 * The authentication guard is used by the provided to the routing framework
 * to handle users that are not logged into the system. It will forward them
 * to the login screen when currently logged out.
 */
@Injectable(
    {
        providedIn: 'root'
    } )
export class AuthenticationGuard implements CanActivate, CanActivateChild, CanLoad
{
    constructor( private readonly authenticationService: AuthenticationService )
    {
    }

    /**
     * This method ensures the module is not lazy loaded if the user doesnt have permission
     * @param route the current activated route shapshot
     * @param state the current activated router state
     */
    canLoad(route: Route, segments: UrlSegment[]): boolean 
    {
        if ( !this.authenticationService.isEnabled )
            return true;

        if ( this.authenticationService.isEnabled && this.authenticationService.isSignedIn )
            return true;

        return this.authenticationService.navigateToSignIn();
    }

    /**
     * This method ensures that the view cannot be accessed unless the user is logged in
     * @param route the current activated route shapshot
     * @param state the current activated router state
     */
    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean
    {
        if ( !this.authenticationService.isEnabled )
            return true;

        if ( this.authenticationService.isEnabled && this.authenticationService.isSignedIn )
            return true;

        return this.authenticationService.navigateToSignIn();
    }

    /**
     * This method ensures that the child view cannot be accessed unless the user is logged in
     * @param childRoute the current activated child route shapshot
     * @param state the current activated router state
     */
    canActivateChild( childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean
    {
        if ( !this.authenticationService.isEnabled )
            return true;

        if ( this.authenticationService.isEnabled && this.authenticationService.isSignedIn )
            return true;

        return this.authenticationService.navigateToSignIn();
    }
}

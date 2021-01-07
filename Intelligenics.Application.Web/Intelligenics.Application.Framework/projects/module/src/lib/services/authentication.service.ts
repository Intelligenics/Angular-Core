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

import { AuthenticationInfo, IAuthenticationSettings } from "../models/authentication.model";

import { ApplicationService } from './application.service';
import { Injectable } from "@angular/core";

/**
 * The authentication service provides consumers with information
 * about the current user. It also handles various login, logout
 * behaviours for the site.
 */
@Injectable()
export class AuthenticationService
{ 

    constructor(private readonly applicationService: ApplicationService)
    { 
    }

    /**
     * Indicates if authentication has been enabled
     */
    public get isEnabled(): boolean
    {
        return this.applicationService.settings.authentication.isEnabled
    };

    /**
     * Indicates if the user is currnetly signed in
     */
    public get isSignedIn(): boolean
    {
        const currentUser: AuthenticationInfo = this.AuthenticationInfo;

        if (null == currentUser) return false;

        if (null == currentUser.Token || "" == currentUser.Token) return false;

        return true;
    }


    public signOut():void
    {  
        let cookie =  `${this.applicationService.settings.authentication.authenticationCookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = cookie;
        document.location.href = this.applicationService.settings.authentication.authenticationUrl;
    }

    /**
     * gets the authenticaion information from cookies
     */
    public get AuthenticationInfo(): AuthenticationInfo
    {
        const info: AuthenticationInfo = new AuthenticationInfo();
        info.Token = this.readCookie(this.applicationService.settings.authentication.authenticationCookie);
        return info;
    }

    public navigateToSignIn(): void
    {
        document.location.href = this.applicationService.settings.authentication.authenticationUrl;
    }

    private readCookie(name: string)
    {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++)
        {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}

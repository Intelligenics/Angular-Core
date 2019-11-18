// Angular
import { Injectable } from "@angular/core";
import { AuthenticationInfo, IAuthenticationSettings } from "../models/authentication.model";
import { ApplicationService } from './application.service';



/**
 * The authentication service provides consumers with information
 * about the current user. It also handles various login, logout
 * behaviours for the site.
 */
@Injectable()
export class AuthenticationService
{
    private settings: IAuthenticationSettings;

    constructor(private readonly applicationService: ApplicationService)
    {
        if (null == applicationService.settings || null == applicationService.settings.authentication)
            throw "unable to retrieve application settings";

        this.settings = <IAuthenticationSettings>applicationService.settings.authentication;
    }

    /**
     * Indicates if authentication has been enabled
     */
    public get isEnabled(): boolean
    {
        return this.settings.isEnabled
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

    /**
     * gets the authenticaion information from cookies
     */
    public get AuthenticationInfo(): AuthenticationInfo
    {
        const info: AuthenticationInfo = new AuthenticationInfo();
        info.Token = this.readCookie(this.settings.authenticationCookie);
        return info;
    }

    public navigateToSignIn(): void
    {
        document.location.href = this.settings.authenticationUrl;
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

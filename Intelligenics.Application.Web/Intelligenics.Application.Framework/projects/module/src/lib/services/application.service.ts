// Angular
import { Injectable } from "@angular/core";
import { AuthenticationInfo, IAuthenticationSettings } from "../models/authentication.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIConstants } from '../models/framework.constants';
import { map } from 'rxjs/operators';


/**
 * This class generates the application service and allows it to load
 * @param applicationService
 */
export function applicationServiceFactory( applicationService: ApplicationService )
{
    let x = () => applicationService.load();
    return x;
}


/**
 * The authentication service provides consumers with information
 * about the current user. It also handles various login, logout
 * behaviours for the site.
 */
@Injectable()
export class ApplicationService
{
    private _settings: any;

    constructor(private http: HttpClient)
    {
    }

    public get settings()
    {
        return this._settings;
    }

    public load(): Promise<any>
    {
        return new Promise((resolve) =>
        {
            return this.http
                .get(APIConstants.SettingsUrl)
                .subscribe((response: any) =>
                {
                    this._settings = response;
                    resolve(true);
                });
        });
    }
}

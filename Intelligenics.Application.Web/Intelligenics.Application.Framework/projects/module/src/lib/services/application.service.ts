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

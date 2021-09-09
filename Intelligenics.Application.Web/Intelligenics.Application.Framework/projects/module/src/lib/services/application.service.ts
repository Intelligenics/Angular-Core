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

import { Observable, forkJoin } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { APIConstants } from '../models/framework.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { ApplicationRoutes } from '../framework.routing';

/**
 * This class generates the application service and allows it to load
 * @param applicationService
 */
export function applicationServiceFactory(applicationService: ApplicationService)
{
    return () => applicationService.loadConfig().toPromise();
}


/**
 * Base service loads main settings config
 */
@Injectable()
export class ApplicationService
{
    private _settings: any;

    constructor(private http: HttpClient, private router: Router)
    {

    }

    public get settings()
    {
        return this._settings;
    }

    public loadConfig(): Observable<any>
    {
        return this.http
            .get(APIConstants.SettingsUrl)
            .pipe(
                tap((settings) =>
                {
                    this._settings = settings;

                    //ApplicationRoutes.initialise();
                }),
                catchError(err =>
                {
                    console.log('ERROR getting config data', err);
                    throw (err || 'Server error while getting environment');
                })
            )
    }
}

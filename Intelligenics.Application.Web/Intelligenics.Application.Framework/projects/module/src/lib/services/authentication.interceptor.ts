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

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthenticationService } from "./authentication.service";
import { HttpStatusCodes } from '../models/codes.model';

/**
 * Authentication interceptor listens for 401 errors and manages the response
 * and redirects to the login pages where needed.
 */
@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor
{
    constructor(private readonly authenticationService: AuthenticationService)
    {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {

        // If authentication is disabled ignore the interception
        if (!this.authenticationService.isEnabled)
            return next.handle(request);

        let tokenRequest: HttpRequest<any> = request;

        tokenRequest = request.clone(
            {
                setHeaders: {
                    Authorization: `Bearer ${this.authenticationService.AuthenticationInfo.Token}`
                }
            });

        return next.handle(tokenRequest)
            .pipe(
                tap(
                    (event: HttpEvent<any>) =>
                    {
                        if (event instanceof HttpResponse)
                        {
                            // do stuff with response if you want

                        }
                    },
                    (err: any) =>
                    {
                        if (err instanceof HttpErrorResponse)
                            switch (err.status)
                            {
                                case HttpStatusCodes.Unauthorised:
                                    this.authenticationService.navigateToSignIn();
                                    break;
                                default:
                            }
                    }));
    }


}

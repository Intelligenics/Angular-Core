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

import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpStatusCodes } from "../models/codes.model";
import { HttpErrorEventArgs } from "../models/error.model";
import { SnackbarService } from './snackbar.service';
import { ErrorConstants } from '../models/framework.constants';

/**
 * This class handles all the errors across all apis
 */
@Injectable({ providedIn: 'root' })
export class ErrorService
{
    /**
     * error event to inform users that the errors has occurred
     */
    public httpErrorEvent: Subject<HttpErrorEventArgs>;

    constructor(private readonly snackbarService: SnackbarService)
    {
        this.httpErrorEvent = new Subject<HttpErrorEventArgs>();
    }

    /**
     * This method is used to report errors from the api
     * All 400 errors (Bad requests) will be treated
     * as validation errors and shown in the snackbar.
     * @param err the error reported by the api
     */
    public notifyHttpError(err: HttpErrorResponse): void
    {
        // Tell any subscribers about the error
        const args: HttpErrorEventArgs = new HttpErrorEventArgs(err);
        this.httpErrorEvent.next(args); 

        // If handled already we will do nothing
        if (args.handled)
            return;

        
        // Show a snackbar error instead
        switch (err.status)
        {
            case HttpStatusCodes.Zero:
                this.snackbarService.error(err.message);
                break;
            case HttpStatusCodes.BadRequest:
                this.snackbarService.warning(err.error);
                break;
            case HttpStatusCodes.Unauthorised: // handled by authentication
                break;
            case HttpStatusCodes.Forbidden:
                this.snackbarService.error(err.error);
                break;
            case HttpStatusCodes.NotFound:
                this.snackbarService.error(`${ErrorConstants.SERVICENOTFOUND}`);
                break;
            case HttpStatusCodes.MethodNotAllowed:
                this.snackbarService.error(`${ErrorConstants.METHODNOTALLOWED} - ${err.error}`);
                break;
            case HttpStatusCodes.ServiceUnavailable:
                this.snackbarService.error(`${ErrorConstants.SERVICEUNAVAILABLE} - ${err.error}`);
                break;
            default:
                this.snackbarService.error(`${ErrorConstants.UNHANDLEDERROR} - ${err.error}`);
        }

        throw err;
    }
}

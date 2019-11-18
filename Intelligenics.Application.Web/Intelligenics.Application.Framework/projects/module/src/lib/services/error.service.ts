
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
export class ErrorhandlerService
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
        const args: HttpErrorEventArgs = new HttpErrorEventArgs(err);
        this.httpErrorEvent.next(args);

        switch (err.status)
        {
            case HttpStatusCodes.Zero:
                this.snackbarService.error(err.message);
                break;
            case HttpStatusCodes.BadRequest:
                if (args.handled)
                    break;
                this.snackbarService.warning(err.message);
                break;
            case HttpStatusCodes.Unauthorised:// handled by security
                break;
            case HttpStatusCodes.Forbidden:
                this.snackbarService.error(err.message);
                break;
            case HttpStatusCodes.NotFound:
                this.snackbarService.error(ErrorConstants.SERVICENOTFOUND);
                break;
            case HttpStatusCodes.MethodNotAllowed:
                this.snackbarService.error(ErrorConstants.METHODNOTALLOWED);
                break;
            case HttpStatusCodes.ServiceUnavailable:
                this.snackbarService.error(ErrorConstants.SERVICEUNAVAILABLE);
                break;
            default:
                this.snackbarService.error(ErrorConstants.UNHANDLEDERROR);
        }

        throw err;
    }
}

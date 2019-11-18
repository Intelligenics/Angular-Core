import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// Types
import { ErrorhandlerService } from './error.service';

/**
 * Providers default error handling ability for api errors
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor
{
    constructor( private readonly errorService: ErrorhandlerService )
    {

    }

    public intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>
    {
        return next.handle( request )

            .pipe(
                tap(
                    ( event: HttpEvent<any> ) =>
                    {
                        if ( event instanceof HttpResponse )
                        {
                            // do stuff with response if you want
                        }
                    },
                    ( err: HttpEvent<any> ) =>
                    {
                        if ( err instanceof HttpErrorResponse )
                            this.errorService.notifyHttpError( err as HttpErrorResponse );

                        return err;
                    }
                ) );
    }
}

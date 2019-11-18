// Angular
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
        let tokenRequest: HttpRequest<any> = request;

        if (this.authenticationService.isEnabled)
        {
            tokenRequest = request.clone(
                {
                    setHeaders: {
                        Authorization: `Bearer ${this.authenticationService.AuthenticationInfo.Token}`
                    }
                });
        }

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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TestService
{

    constructor(private http: HttpClient)
    {
    }

    /**
     * Gets a list of navigation items from system
     */
    public getLongRunningOperation(): Observable<any>
    {
        return this.http
            .get(`api/test/longrunning`)
            .pipe(
                map((response: any) =>
                {
                    if (null == response)
                        return null;  

                    return response 
                })
            );
    }

    /**
     * Gets a list of navigation items from system
     */
    public getValidationError(): Observable<any>
    {
        return this.http
            .get(`api/test/validationerror`)
            .pipe(
                map((response: any) =>
                {
                    if (null == response)
                        return null;

                    return response
                })
            );
    }

    /**
     * Gets a list of navigation items from system
     */
    public getUnhandledError(): Observable<any>
    {
        return this.http
            .get(`api/test/unhandlederror`)
            .pipe(
                map((response: any) =>
                {
                    if (null == response)
                        return null;

                    return response
                })
            );
    }

    /**
     * Gets a list of navigation items from system
     */
    public getInvalidEndpoint(): Observable<any>
    {
        return this.http
            .get(`api/test/deadend`)
            .pipe(
                map((response: any) =>
                {
                    if (null == response)
                        return null;

                    return response
                })
            );
    }
}

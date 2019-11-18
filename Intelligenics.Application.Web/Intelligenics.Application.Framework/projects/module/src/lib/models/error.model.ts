import { HttpErrorResponse } from '@angular/common/http';

/**
 * This is the error object used to provided error mapping
 * for api errors
 */
export class HttpError
{
    /**
     * An error message from the api
     */
    public message: string;

    constructor( message: string )
    {
        this.message = message;
    }
}

/**
 * Http error arguments used in api error notifications
 */
export class HttpErrorEventArgs
{
    /**
     * The http error response returned by the api
     */
    public response: HttpErrorResponse;

    /**
     * if this is set to true the snackbar will not show the error
     * as it will assume it has been handled already
     */
    public handled: boolean;

    constructor( response: HttpErrorResponse )
    {
        this.response = response;
    }
}


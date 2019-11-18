/**
 * Http status codes.
 */
export class HttpStatusCodes
{
    /**
     * zero
     */
    public static readonly Zero: number = 0;

    /**
     * Success
     */
    public static readonly Success: number = 200;

    /**
     * Bad request
     */
    public static readonly BadRequest: number = 400;

    /**
     * Unauthorised error code
     */
    public static readonly Unauthorised: number = 401;

    /**
     * Forbidden
     */
    public static readonly Forbidden: number = 403;

    /**
     * Not found
     */
    public static readonly NotFound: number = 404;

    /**
     * Method not allowed
     */
    public static readonly MethodNotAllowed: number = 405;

    /**
     * Service Unavailable
     */
    public static readonly ServiceUnavailable: number = 503;
}

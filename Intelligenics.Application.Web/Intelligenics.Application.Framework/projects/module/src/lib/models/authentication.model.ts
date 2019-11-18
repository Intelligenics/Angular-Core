/**
 * Provides authetication information about the current user
 */
export class AuthenticationInfo
{
    /**
     *  Indicates if the current user is signed in or not
     */
    public IsSignedIn: boolean;

    /**
     *  Provides the current users display name
     */
    public DisplayName: string;

    /**
     *  Provides the current users email address
     */
    public EmailAddress: string;

    /**
     *  Provides the jwt bearer token to be used for api
     *  subsequent api calls
     */
    public Token: string;

    constructor()
    {
        this.IsSignedIn = false;
        this.DisplayName = "";
        this.Token = "";
    }
}


export interface IAuthenticationSettings
{
    authenticationUrl: string,
    isEnabled: boolean;
    authenticationCookie: string;
}

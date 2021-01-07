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

export class FrameworkConstants
{
    public static readonly MESSAGEINTERVAL: number = 4000;

    public static readonly TIMEOUTINTERVAL: number = 4000;

    public static readonly SIDEBARTIMEOUT: number = 400;

    public static readonly IN = 'in';
    public static readonly OUT = 'out';
}

/**
 * All general security constants used throughout this module
 */
export class ErrorConstants
{
    /** The not found error */
    public static readonly SERVICENOTFOUND: string = 'Service not found';

    /** Method not allowed error */
    public static readonly METHODNOTALLOWED: string = 'This method is not allowed';

    /** Method not allowed error */
    public static readonly SERVICEUNAVAILABLE: string = 'The Api Service is unavailable at this time';

    /** Method not allowed error */
    public static readonly UNHANDLEDERROR: string = 'An unhandled error was reported';
}

export class SecurityConstants
{

}

export class APIConstants
{
    public static readonly SettingsUrl: string = 'settings.json';
}

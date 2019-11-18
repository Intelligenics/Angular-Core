//////////////////////////////////////////////////////////////////////////
///
/// Intelligenics Angular Application Framework
/// Copyright(C) 2019 Matthew Parton M.Sc
///
/// This program is free software: you can redistribute it and / or modify
/// it under the terms of the GNU General Public License as published by
/// the Free Software Foundation, either version 3 of the License, or
/// (at your option) any later version.
///
/// This program is distributed in the hope that it will be useful,
/// but WITHOUT ANY WARRANTY; without even the implied warranty of
/// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
/// GNU General Public License for more details.
///
/// You should have received a copy of the GNU General Public License
/// along with this program. If not, see < https://www.gnu.org/licenses/>.
///
/// Contact information
///
/// Name: Matthew Parton M.Sc
///
/// LinkedIn Profile: https://www.linkedin.com/in/intelligenics/
/// Website: http://www.intelligenics.co.uk
/// Email: matthewparton@intelligenics.co.uk
///
//////////////////////////////////////////////////////////////////////////
export class FrameworkConstants
{
    public static readonly MESSAGEINTERVAL: number = 4000;
    
    public static readonly TIMEOUTINTERVAL: number = 2000;

    public static readonly SIDEBARTIMEOUT: number = 400;
   
    public static readonly IN = "in";
    public static readonly OUT = "out";
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
    public static readonly authenticationCookie = "IgniusXDT";
    public static readonly authenticationUrl = "http://signin.ignius.cloud";
}

export class APIConstants
{
    public static readonly SettingsUrl: string = 'assets/settings.json';
} 

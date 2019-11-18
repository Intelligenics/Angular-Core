"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var FrameworkConstants = /** @class */ (function () {
    function FrameworkConstants() {
    }
    FrameworkConstants.MESSAGEINTERVAL = 4000;
    FrameworkConstants.TIMEOUTINTERVAL = 2000;
    FrameworkConstants.SIDEBARTIMEOUT = 400;
    FrameworkConstants.IN = "in";
    FrameworkConstants.OUT = "out";
    return FrameworkConstants;
}());
exports.FrameworkConstants = FrameworkConstants;
/**
 * All general security constants used throughout this module
 */
var ErrorConstants = /** @class */ (function () {
    function ErrorConstants() {
    }
    /** The not found error */
    ErrorConstants.SERVICENOTFOUND = 'Service not found';
    /** Method not allowed error */
    ErrorConstants.METHODNOTALLOWED = 'This method is not allowed';
    /** Method not allowed error */
    ErrorConstants.SERVICEUNAVAILABLE = 'The Api Service is unavailable at this time';
    /** Method not allowed error */
    ErrorConstants.UNHANDLEDERROR = 'An unhandled error was reported';
    return ErrorConstants;
}());
exports.ErrorConstants = ErrorConstants;
//# sourceMappingURL=framework.constants.js.map
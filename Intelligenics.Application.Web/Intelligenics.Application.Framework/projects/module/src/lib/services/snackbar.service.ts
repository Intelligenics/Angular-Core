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

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { timeout } from "rxjs/operators";
import { SnackbarComponent } from "../components/snackbar/snackbar.component";
import { FrameworkConstants } from "../models/framework.constants";

/** Snackbar message type. */
export enum SnackbarMessageType
{
    Info = 1,
    Warning = 2,
    Error = 3,
    Question = 4
}

/** Snackbar event. */
export class SnackbarEventArgs
{
    /**
     * The snackbar message type
     */
    public messageType: SnackbarMessageType;
    /**
     * The message to be shown
     */
    public message: string;

    constructor(message: string, messageType: SnackbarMessageType)
    {
        this.message = message;
        this.messageType = messageType;
    }
}

/** Snackbar service. */
@Injectable({ providedIn: "root" })
export class SnackbarService
{
    /**
     * Snackbar closed event used to track changes in the snackbar window
     */
    public newMessageEvent: Subject<SnackbarEventArgs>; 

    constructor()
    {
        this.newMessageEvent = new Subject<SnackbarEventArgs>(); 
    }

    /**
     * Information message.
     * @param message Snackbar message type.
     */
    public info(message: string): void
    {
        this.newMessageEvent.next(new SnackbarEventArgs(message, SnackbarMessageType.Info));
    }

    /**
     * Warning message.
     * @param message Message to display.
     */
    public warning(message: string): void
    {
        this.newMessageEvent.next(new SnackbarEventArgs(message, SnackbarMessageType.Warning));
    }

    /**
     * Error message.
     * @param message Message to display.
     */
    public error(message: string): void
    {
        this.newMessageEvent.next(new SnackbarEventArgs(message, SnackbarMessageType.Error));
    } 
}

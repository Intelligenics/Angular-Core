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

    //private clearMessages(): void
    //{
    //    if (null != this.messageInterval)
    //        return;

    //    const messageInfo: SnackbarMessage = this.messages.pop();
    //    this.snackbarComponent.show(messageInfo.message, messageInfo.messageType);

    //    this.messageInterval = setInterval(
    //        () =>
    //        {
    //            if (this.messages.length == 0)
    //            {
    //                clearInterval(this.messageInterval);
    //                this.messageInterval = null;

    //                return;
    //            }

    //            const messageInfo: SnackbarMessage = this.messages.pop();
    //            this.snackbarComponent.show(messageInfo.message, messageInfo.messageType);

    //        },
    //        FrameworkConstants.messageInterval);
    //}
}

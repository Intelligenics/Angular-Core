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
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

/**
 * The dialog service provide functions to show a modal dialog window
 */
@Injectable( { providedIn: 'root' } )
export class DialogService
{
    public readonly dialogClosingEvent: Subject<DialogClosingEventArgs>;
    public readonly dialogClosedEvent: Subject<any>;

    /**
     * Creates a new dialog service instance.
     */
    constructor( private readonly router: Router )
    {
        this.dialogClosingEvent = new Subject<DialogClosingEventArgs>();
        this.dialogClosedEvent = new Subject<any>();
    }

    /**
     * Shows a warning alert message to the user
     * @param title the title of the message
     * @param message the message to show
     */
    public warning( title: string, message: string ): void
    {
        this.alert( title, message, MessageType.Warning );
    }

    /**
     * Shows a error alert message to the user
     * @param title the title of the message
     * @param message the message to show
     */
    public error( title: string, message: string ): void
    {
        this.alert( title, message, MessageType.Error );
    }

    /**
     * Shows a question alert message to the user
     * @param title the title of the message
     * @param message the message to show
     */
    public question( title: string, message: string ): void
    {
        this.alert( title, message, MessageType.Question, DialogOptions.YesNo );
    }
    /**
     * Shows an informational alert message to the user
     * @param title the title of the message
     * @param message the message to show
     */
    public info( title: string, message: string ): void
    {
        this.alert( title, message, MessageType.Info );
    }

    /**
     * Shows an alert message to the user
     * @param title the title of the message
     * @param message the message to show
     * @param messageType the type of message
     * @param allowClose indicates if a close button is allowed on the dialog window
     */
    public alert( title: string, message: string, messageType: MessageType = MessageType.Info, options: DialogOptions = DialogOptions.OK, allowClose: boolean = true ): void
    {
        this.router.navigate(
            [{ outlets: { dialog: 'dialog' } }],
            {
                skipLocationChange: true,
                state:
                {
                    title,
                    message,
                    dialogOptions: options,
                    messageType,
                    allowClose
                }
            } );
    }

    /**
     * notification for all subscribers that the dialog is closing
     * @param args allowing option to prevent the closure of the sidebar
     */
    public notifyDialogClosing( args: DialogClosingEventArgs ): void
    {
        this.dialogClosingEvent.next( args );
    }

    /**
     * Shows the about dialog
     * @param allowClose optional value indicates if the dialog window provides a close button
     */
    public about( version: string, disclaimer: string, productName: string ): void
    {
        this.router.navigate(
            [{ outlets: { dialog: 'dialog/about' } }],
            {
                skipLocationChange: true,
                state:
                {
                    title: 'about',
                    version,
                    disclaimer,
                    productName,
                    allowClose: true
                }
            } );
    }
    /**
     * Shows the dialog with the specified route path to the dialog'.
     * @param route the dialog route to show
     * @param title the dialog title
     * @param allowClose optional value indicates if the dialog window provides a close button
     */
    public show( route: string, title: string, allowClose: boolean = true ): void
    {
        this.router.navigate(
            [{ outlets: { dialog: `dialog/${route}` } }],
            {
                skipLocationChange: true,
                state:
                {
                    title,
                    allowClose
                }
            } );
    }

    /**
     * Closes the dialog window
     */
    public close(): void
    {
        this.dialogClosedEvent.next( null );
    }
}

/** alert message type. */
export enum MessageType
{
    Info = 1,
    Warning = 2,
    Error = 3,
    Question = 4
}
/**
 * The dialog buttons that can be shown as a group in the dialog window
 */
export enum DialogOptions
{
    YesNo = 1,
    OKCancel = 2,
    ConfirmCancel = 3,
    SaveCancel = 4,
    OK = 5,
    Yes = 6,
    No = 7,
    Confirm = 8,
    Cancel = 9,
    Close = 10,
    None = 11,
    Save = 12
}

/**
 * The arguments received from the dialog when it is closed
 */
export class DialogClosingEventArgs
{
    /**
     * Option to prevent the dialog closing when the the dialog is closed
     */
    public allowClose: boolean;

    /**
     * The option that was clicked when the user attempts to close the dialog.
     */
    public selectedOption: DialogOptions;

    constructor()
    {
        this.allowClose = true;
        this.selectedOption = DialogOptions.None;
    }
}

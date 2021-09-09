import { DialogClosingEventArgs, DialogOpenEventArgs } from '../models/dialog.models';
import { Injectable, Type } from '@angular/core';

import { Router } from '@angular/router';
import { Subject } from 'rxjs';

/**
 * The dialog service provide functions to show a modal dialog window
 */
@Injectable({ providedIn: 'root' })
export class DialogService
{

    public readonly dialogClosing$: Subject<DialogClosingEventArgs>;
    public readonly dialogClosed$: Subject<any>;
    public dialogOpen$: Subject<DialogOpenEventArgs> = new Subject<DialogOpenEventArgs>();
 
    constructor(private readonly router: Router)
    {
        this.dialogClosing$ = new Subject<DialogClosingEventArgs>();
        this.dialogClosed$ = new Subject<any>();
    }  
 

    /**
     * notification for all subscribers that the dialog is closing
     * @param args allowing option to prevent the closure of the sidebar
     */
    public notifyDialogClosing(args: DialogClosingEventArgs): void
    {
        this.dialogClosing$.next(args);
    }
 
    /**
     * Shows the dialog with the specified route path to the dialog'.
     * @param route the dialog route to show
     * @param title the dialog title
     * @param allowClose optional value indicates if the dialog window provides a close button
     */
    public show(component: Type<any>, title?: string, allowClose: boolean = true, data: any = null): void
    {
        this.dialogOpen$.next(new DialogOpenEventArgs(component, allowClose));
    }

    /**
     * Closes the dialog window
     */
    public close(): void
    {
        this.dialogClosed$.next(null);
    }
}

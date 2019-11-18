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


import { Component, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { backdropOpenClose, dialogOpenClose } from '../../animations/dialog.animation';
import { DialogClosingEventArgs, DialogOptions, DialogService, MessageType } from '../../services/dialog.service';

/** Dialog used for secondary routing only */
@Component( {
    animations:
        [
            backdropOpenClose,
            dialogOpenClose,
        ],
    selector: 'int-app-dialog',
    styleUrls: ['dialog.component.scss'],
    templateUrl: 'dialog.component.html'
} )
export class DialogComponent implements OnDestroy
{
    /** Title. */
    public title: string;
    public message: string;
    public dialogOptions: DialogOptions;
    public messageType: MessageType;

    public state: string;
    public allowClose: boolean;
    private readonly subscriptions: Array<Subscription>;

    constructor( private readonly activatedRoute: ActivatedRoute, private readonly router: Router, private readonly dialogService: DialogService )
    {
        this.state = null;
        this.subscriptions = [];

        this.subscriptions.push( this.activatedRoute.data.subscribe( () =>
        {
            const navigation: any = router.getCurrentNavigation();

            if ( null != navigation && null != navigation.extras && null != navigation.extras.state )
            {
                this.title = navigation.extras.state.title;
                this.allowClose = navigation.extras.state.allowClose;
                this.message = navigation.extras.state.message;
                this.dialogOptions = navigation.extras.state.dialogOptions;
                this.messageType = navigation.extras.state.messageType;
            }
        } ) );

        this.subscriptions.push( this.dialogService.dialogClosedEvent.subscribe( () =>
        {
            this.close();
        } ) );
    }

    public ngOnDestroy(): void
    {
        this.subscriptions.forEach( value => value.unsubscribe() );
    }

    public onDialogCloseClicked(): void
    {
        this.close();
    }

    public onOptionSelected( $event: DialogOptions ): void
    {
        this.close( $event );
    }
    @HostListener( 'document:keydown.escape', ['$event'] )
    public onEscapePressed( $event: KeyboardEvent )
    {
        this.close();
    }

    public close( $event: DialogOptions = null )
    {
        let args = new DialogClosingEventArgs();
        args.selectedOption = $event;
        this.dialogService.notifyDialogClosing( args );

        if ( !args.allowClose ) return;

        this.state = 'closed';

        setTimeout( () =>
        {
            this.router.navigate( [{ outlets: { dialog: null } }], { skipLocationChange: true } );
            this.dialogService.dialogClosedEvent.next();
        }, 400 );
    }
}

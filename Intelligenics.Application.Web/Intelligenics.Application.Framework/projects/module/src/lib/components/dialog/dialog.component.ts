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

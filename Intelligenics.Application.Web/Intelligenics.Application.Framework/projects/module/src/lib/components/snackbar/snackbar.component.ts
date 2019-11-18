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
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FrameworkConstants } from '../../models/framework.constants';
import { SnackbarEventArgs, SnackbarMessageType, SnackbarService } from '../../services/snackbar.service';

/** Snackbar component. */
@Component( {
    animations:
        [
            trigger(
                'slideInOut',
                [
                    state( 'in',
                           style( {
                            opacity: 1,
                            transform: 'scale(1)'
                        } ) ),
                    state( 'out', style( {
                        opacity: 0,
                        transform: 'scale(0)'
                    } ) ),
                    transition( 'in => out', animate( '400ms ease-in-out' ) ),
                    transition( 'out => in', animate( '400ms ease-in-out' ) ),
                ] ),
        ],
    changeDetection: ChangeDetectionStrategy.OnPush,  
    selector: 'int-app-snackbar',
    styleUrls: ['snackbar.component.scss'],
    templateUrl: 'snackbar.component.html'
} )
export class SnackbarComponent
{
    /** Menu state */
    public state: string;

    /** Message */
    public message: string;

    /** The message type to show: error, info, warning etc */
    public messageType: SnackbarMessageType;

    /** Snackbar message type enumeration */
    public MESSAGETYPE: any = SnackbarMessageType;

    private readonly messages: Array<SnackbarEventArgs>;

    private messageInterval: any;

    private timeOut: any;

    constructor(
        private readonly snackbarService: SnackbarService,
        private readonly changeDetectorRef: ChangeDetectorRef )
    {
        this.state = FrameworkConstants.OUT;
        this.messages = [];

        this.snackbarService.newMessageEvent
            .subscribe( ( message: SnackbarEventArgs ) =>
            {
                this.messages.unshift( message );
                this.processMessageQueue();
            } );
    }

    /**
     * Show message.
     * @param message Message to show.
     * @param messageType Message type.
     */
    public show( message: SnackbarEventArgs ): void
    {
        this.state = FrameworkConstants.IN;
        this.message = message.message;
        this.messageType = message.messageType;
        this.changeDetectorRef.detectChanges();

        if ( null != this.timeOut )
            clearTimeout( this.timeOut );

        this.timeOut = setTimeout(
            () =>
            {
                console.log( this.state );
                this.state = FrameworkConstants.OUT;
                this.changeDetectorRef.detectChanges();
            },
            FrameworkConstants.TIMEOUTINTERVAL );
    }

    private processMessageQueue(): void
    {
        if ( null != this.messageInterval )
            return;

        const message: SnackbarEventArgs = this.messages.pop();
        this.show( message );

        this.messageInterval = setInterval(
            () =>
            {
                // If we have not message left in the queue then stop the message
                // queue processes
                if ( this.messages.length == 0 )
                {
                    clearInterval( this.messageInterval );
                    this.messageInterval = null;
                    return;
                }

                const message: SnackbarEventArgs = this.messages.pop();
                this.show( message );

            },
            FrameworkConstants.MESSAGEINTERVAL );
    }
}

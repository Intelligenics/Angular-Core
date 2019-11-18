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

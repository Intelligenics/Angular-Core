import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { DialogOptions, DialogService, MessageType, SidebarPosition, SidebarService, SnackbarService } from '../../../../module/src/public-api';

@Component( {
    selector: 'app-test',
    templateUrl: './test.component.html',
    host: { class: 'app-test' }
} )
export class TestComponent implements OnInit
{
    constructor(
        private readonly router: Router,
        private readonly dialogService: DialogService,
        private readonly snackbarService: SnackbarService,
        private readonly sidebarService: SidebarService )
    {

    }

    public ngOnInit(): void
    {

    }

    public onShowSidebarLeft(): void
    {
        this.sidebarService.show( 'content', SidebarPosition.Left );
    }

    public onShowSidebarRight(): void
    {
        this.sidebarService.show( 'content', SidebarPosition.Right );
    }

    public onShowSidebarBottom(): void
    {
        this.sidebarService.show( 'content', SidebarPosition.Bottom );
    }

    public onShowSidebarTop(): void
    {
        this.sidebarService.show( 'content', SidebarPosition.Top );
    }

    public onShowShackbarInfo(): void
    {
        this.snackbarService.info( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, \
                                  consectetur adipiscing elit, sed; do eiusmod; tempor; incididunt; ut; labore; et; dolore; magna; aliqua.; ' );
    }

    public onShowShackbarWarning(): void
    {
        this.snackbarService.warning( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' );

    }

    public onShowShackbarError(): void
    {
        this.snackbarService.error( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' );
    }

    public onShowAbout(): void
    {

        let productName = 'Intelligenics Angular Application Framework';
        let version = '2.0.1';
        let disclaimer = 'Copyright (C) 2019  Intelligenics\r\n \
        \
        This program is free software: you can redistribute it and/or modify\
        it under the terms of the GNU General Public License as published by\
        the Free Software Foundation, either version 3 of the License, or\
        (at your option) any later version.\r\n\r\n\
        \
        This program is distributed in the hope that it will be useful,\
        but WITHOUT ANY WARRANTY; without even the implied warranty of\
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\
        GNU General Public License for more details.\r\n\r\n\
        \
        You should have received a copy of the GNU General Public License\
        along with this program.  If not, see <https://www.gnu.org/licenses/>.';
        this.dialogService.about( version, disclaimer, productName );
    }

    public onShowDialog(): void
    {
        this.dialogService.show( 'content', 'This is the title text here' );
    }

    public onShowInfo(): void
    {
        this.dialogService.info( 'this is a info', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' );
    }

    public onShowWarning(): void
    {
        this.dialogService.warning( 'this is a warning', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' );
    }

    public onShowError(): void
    {
        this.dialogService.error('this is a error', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' );
    }

    public onShowQuestion(): void
    {
        this.dialogService.question( 'this is a error', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' );
    }

    public onShowConfirmation(): void
    {
        this.dialogService.alert( 'this is a error', 'Are you sure you want to do this?', MessageType.Info, DialogOptions.ConfirmCancel );
    }

    public onShowSaveCancel(): void
    {
        this.dialogService.alert('this is a message', 'Are you sure you want to do this?', MessageType.Info, DialogOptions.SaveCancel );
    }

    public onShowYesNo(): void
    {
        let sub = this.dialogService.dialogClosingEvent.subscribe( ( value ) =>
        {
            this.snackbarService.info( `you selected ${DialogOptions[value.selectedOption]} ` );
            sub.unsubscribe();
        } );
        this.dialogService.alert( 'this is a message', 'Are you sure you want to do this?', MessageType.Info, DialogOptions.YesNo );
    }

    public onShowYes(): void
    {
        this.dialogService.alert( 'this is a message', 'Are you sure you want to do this?', MessageType.Info, DialogOptions.Yes );
    }
}

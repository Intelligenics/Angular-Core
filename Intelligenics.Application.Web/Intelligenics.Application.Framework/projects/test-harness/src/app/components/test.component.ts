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
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { DialogOptions, DialogService, MessageType, SidebarPosition, SidebarService, SnackbarService } from '../../../../module/src/public-api';
import { TestService } from '../services/test.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    host: { class: 'app-test' }
})
export class TestComponent implements OnInit
{
    constructor(
        private readonly router: Router,
        private readonly dialogService: DialogService,
        private readonly snackbarService: SnackbarService,
        private readonly sidebarService: SidebarService,
        private readonly testService: TestService)
    {

    }

    public ngOnInit(): void
    {

    }

    public onShowSidebarLeft(): void
    {
        this.sidebarService.show('content', SidebarPosition.Left);
    }

    public onShowSidebarRight(): void
    {
        this.sidebarService.show('content', SidebarPosition.Right);
    }

    public onShowSidebarBottom(): void
    {
        this.sidebarService.show('content', SidebarPosition.Bottom);
    }

    public onShowSidebarTop(): void
    {
        this.sidebarService.show('content', SidebarPosition.Top);
    }

    public onShowShackbarInfo(): void
    {
        this.snackbarService.info('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, \
                                  consectetur adipiscing elit, sed; do eiusmod; tempor; incididunt; ut; labore; et; dolore; magna; aliqua.; ' );
    }

    public onShowShackbarWarning(): void
    {
        this.snackbarService.warning('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ');

    }

    public onShowShackbarError(): void
    {
        this.snackbarService.error('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ');
    }

    public onShowAbout(): void
    {

        let productName = 'Intelligenics Angular Application Framework';
        let version = '2.0.1';
        let disclaimer = 'Copyright (C) 2019  Intelligenics\r\n \
        \
        Intelligenics Angular Application Framework\
        Copyright(C) 2019 Intelligenics Ltd.\
        \
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),\
        to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute,\
        sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,\
        subject to the following conditions:\
        \
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\
        \
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, \
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, \
        DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE \
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';

        this.dialogService.about(version, disclaimer, productName);
    }

    public onShowDialog(): void
    {
        this.dialogService.show('content', 'This is the title text here');
    }

    public onShowInfo(): void
    {
        this.dialogService.info('this is a info', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ');
    }

    public onShowWarning(): void
    {
        this.dialogService.warning('this is a warning', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ');
    }

    public onShowError(): void
    {
        this.dialogService.error('this is a error', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ');
    }

    public onShowQuestion(): void
    {
        this.dialogService.question('this is a error', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ');
    }

    public onShowConfirmation(): void
    {
        this.dialogService.alert('this is a error', 'Are you sure you want to do this?', MessageType.Info, DialogOptions.ConfirmCancel);
    }

    public onShowSaveCancel(): void
    {
        this.dialogService.alert('this is a message', 'Are you sure you want to do this?', MessageType.Info, DialogOptions.SaveCancel);
    }

    public onShowYesNo(): void
    {
        let sub = this.dialogService.dialogClosingEvent.subscribe((value) =>
        {
            this.snackbarService.info(`you selected ${DialogOptions[value.selectedOption]} `);
            sub.unsubscribe();
        });
        this.dialogService.alert('this is a message', 'Are you sure you want to do this?', MessageType.Info, DialogOptions.YesNo);
    }

    public onShowYes(): void
    {
        let sub = this.dialogService.dialogClosingEvent.subscribe((value) =>
        {
            sub.unsubscribe();
        });
        this.dialogService.show('this is a message', 'Are you sure you want to do this?', false);
    }


    public onTrapDialog()
    {
        let sub = this.dialogService.dialogClosingEvent.subscribe((value) =>
        {
            sub.unsubscribe();
        });
        this.dialogService.show('myroutepath', 'Are you sure you want to do this?', false);
    }


    public onTestAPIError(): void
    {
        this.testService.getUnhandledError().subscribe();
    }

    public onTestLongRunning(): void
    {
        this.testService.getLongRunningOperation().subscribe();
    }

    public onTestValidationError(): void
    {
        this.testService.getValidationError().subscribe();
    }

    public onTestInvalidEndpoint(): void
    {
        this.testService.getInvalidEndpoint().subscribe();
    }
}

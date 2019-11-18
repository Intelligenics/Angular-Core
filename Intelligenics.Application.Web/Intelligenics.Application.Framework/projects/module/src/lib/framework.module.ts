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


import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { AlertComponent } from "./components/alert/alert.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { FrameworkComponent } from "./components/framework/framework.component";
import { ProgressComponent } from './components/progress/progress.component';
import { BottomSideBarComponent, LeftSideBarComponent, RightSideBarComponent, TopSideBarComponent } from "./components/sidebar/sidebar.component";
import { SnackbarComponent } from "./components/snackbar/snackbar.component";
import { ApplicationService, applicationServiceFactory } from './services/application.service';
import { AuthenticationService } from './services/authentication.service';
import { ErrorInterceptor } from "./services/error.interceptor";
import { LoadingInterceptor } from "./services/loading.interceptor";
import { AuthenticationInterceptor } from "./services/authentication.interceptor";

/**
 * This module contains all the components needed by the application to function
 * and provides common services to all the other modules.
 */
@NgModule({
    imports:
        [
            HttpClientModule,
            CommonModule,
            RouterModule,
        ],
    exports:
        [
            FrameworkComponent,
        ],
    declarations:
        [
            FrameworkComponent,
            LeftSideBarComponent,
            RightSideBarComponent,
            BottomSideBarComponent,
            TopSideBarComponent,
            SnackbarComponent,
            AlertComponent,
            DialogComponent,
            AboutComponent,
            ProgressComponent,
        ],
    providers:
        [
            ApplicationService,
            { provide: APP_INITIALIZER, useFactory: applicationServiceFactory, deps: [ApplicationService], multi: true },
           
            AuthenticationService,
            {
                multi: true,
                provide: HTTP_INTERCEPTORS,
                useClass: ErrorInterceptor
            },
            {
                multi: true,
                provide: HTTP_INTERCEPTORS,
                useClass: LoadingInterceptor
            },
            {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthenticationInterceptor,
                multi: true,
                deps: [ApplicationService]
            }, 
        ]
})
export class FrameworkModule { }

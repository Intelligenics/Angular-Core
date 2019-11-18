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

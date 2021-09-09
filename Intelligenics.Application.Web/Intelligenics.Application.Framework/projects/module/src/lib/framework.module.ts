import { APP_INITIALIZER, NgModule } from "@angular/core";
import { ApplicationService, applicationServiceFactory } from './services/application.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
 
import { AuthenticationInterceptor } from "./services/authentication.interceptor";
import { AuthenticationService } from './services/authentication.service';
import { CommonModule } from "@angular/common";
import { ErrorInterceptor } from "./services/error.interceptor"; 
import { RouterModule } from "@angular/router"; 

@NgModule({
    imports:
        [
            HttpClientModule,
            CommonModule,
            RouterModule, 
        ],
    exports:
        [  
        ],
    declarations:
        [  
        ],
    providers:
        [
            ApplicationService,
            {
                provide: APP_INITIALIZER,
                useFactory: applicationServiceFactory,
                deps: [ApplicationService],
                multi: true
            },
            AuthenticationService,
            {
                multi: true,
                provide: HTTP_INTERCEPTORS,
                useClass: ErrorInterceptor
            },
            {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthenticationInterceptor,
                multi: true,
                deps: [AuthenticationService]
            },
        ]
})
export class FrameworkModule { }

// Angular
import { RouterModule } from '@angular/router'; 
import { ApplicationRoutes as ApplicationFrameworkRoutes } from "@intelligenics/application-framework";
import { StylesRoutes } from '../../../module/src/lib/styles.routing'; 


ApplicationFrameworkRoutes.append(  StylesRoutes );

export const AppRouting = RouterModule.forRoot(ApplicationFrameworkRoutes.AppRoutes,
    {
        // enableTracing: true
    });


// Angular
import { RouterModule } from '@angular/router'; 
import { ApplicationRoutes as ApplicationFrameworkRoutes } from "@intelligenics/application-framework";
import { ComponentsRoutes } from '../../../module/src/lib/components.routing'; 


ApplicationFrameworkRoutes.append(  ComponentsRoutes );

export const AppRouting = RouterModule.forRoot(ApplicationFrameworkRoutes.AppRoutes,
    {
        // enableTracing: true
    });


// Angular
import { RouterModule } from '@angular/router'; 
import { ApplicationRoutes as ApplicationFrameworkRoutes } from "@intelligenics/application-framework";
import { FrameworkRoutes } from '../../../module/src/lib/framework.routing'; 


ApplicationFrameworkRoutes.append(  FrameworkRoutes );

export const AppRouting = RouterModule.forRoot(ApplicationFrameworkRoutes.AppRoutes,
    {
        // enableTracing: true
    });


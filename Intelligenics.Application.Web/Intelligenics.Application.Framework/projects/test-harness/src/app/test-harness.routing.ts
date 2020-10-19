// Angular
import { RouterModule } from '@angular/router';  
import { FrameworkRoutes, ApplicationRoutes } from '../../../module/src/lib/framework.routing'; 


ApplicationRoutes.append(  FrameworkRoutes );

export const AppRouting = RouterModule.forRoot(ApplicationRoutes.AppRoutes,
    {
        // enableTracing: true
    });


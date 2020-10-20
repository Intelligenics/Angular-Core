// Angular

import { ApplicationRoutes, FrameworkRoutes } from '../../../module/src/lib/framework.routing';

import { RouterModule } from '@angular/router';

ApplicationRoutes.append(  FrameworkRoutes );

export const AppRouting = RouterModule.forRoot(ApplicationRoutes.AppRoutes,
    {
        // enableTracing: true
    });


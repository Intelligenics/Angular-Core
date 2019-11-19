// Angular
import { RouterModule } from '@angular/router'; 
import { ApplicationRoutes } from "@intelligenics/application-framework";
import { ComponentsRoutes } from '../../../module/src/lib/components.routing';
import { TestComponent } from './components/test/test.component';


ApplicationRoutes.prepend(
    [
        // Primary Routes
        {
            path: '',
            children:
                [
                    {
                        path: '',
                        component:TestComponent
                    }
                ]
        }
    ])


export const AppRouting = RouterModule.forRoot(ApplicationRoutes.AppRoutes,
    {
        // enableTracing: true
    });


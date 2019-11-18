// Angular
import { RouterModule } from '@angular/router';
import { ApplicationRoutes, DialogRoutes, SidebarRoutes } from '../../../module/src/lib/framework.routing';
import { SidebarPosition } from '../../../module/src/public-api';
import { ContentComponent } from './components/content.component';
import { NavigationComponent } from './components/navigation.component';
import { TestComponent } from './components/test.component';

ApplicationRoutes.append(
    [
        // Primary Routes
        {
            path: '',
            component: TestComponent
        },
    ]);

DialogRoutes.append(
    [
        // Primary Routes
        {
            path: 'content',
            component: ContentComponent
        },
    ]
);

SidebarRoutes.append(
    [
        // Primary Routes
        {
            path: 'content',
            component: NavigationComponent
        },
    ],
    SidebarPosition.Left
);

SidebarRoutes.append(
    [
        // Primary Routes
        {
            path: 'content',
            component: NavigationComponent
        },
    ],
    SidebarPosition.Right
);
SidebarRoutes.append(
    [
        // Primary Routes
        {
            path: 'content',
            component: ContentComponent
        },
    ],
    SidebarPosition.Top
);
SidebarRoutes.append(
    [
        // Primary Routes
        {
            path: 'content',
            component: ContentComponent
        },
    ],
    SidebarPosition.Bottom
);

export const AppRouting = RouterModule.forRoot(ApplicationRoutes.AppRoutes,
    {
        // enableTracing: true
    });


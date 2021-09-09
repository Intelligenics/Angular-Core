import { Routes } from "@angular/router";

import { AuthenticationGuard } from "./guards/authentication.guard"; 

export class ApplicationRoutes 
{
    public static AppRoutes: Routes = 
    [
        {
            path: '',
            canActivate: [AuthenticationGuard],
            canActivateChild: [AuthenticationGuard],
            canLoad: [AuthenticationGuard],
            children: 
            [
            ]
        } 
    ];

    public static prepend(routes: Routes): void 
    {
        ApplicationRoutes.AppRoutes[0].children.unshift(...routes);
    }

    public static append(routes: Routes): void 
    {
        ApplicationRoutes.AppRoutes[0].children.push(...routes);
    }

    static initialise():void
    {
        ApplicationRoutes.AppRoutes[0].canActivate = [AuthenticationGuard];
        ApplicationRoutes.AppRoutes[0].canActivateChild = [AuthenticationGuard];
    }
}


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
import { Routes } from "@angular/router";
import { Subject } from "rxjs";
import { AboutComponent } from "./components/about/about.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { BottomSideBarComponent, LeftSideBarComponent, RightSideBarComponent, TopSideBarComponent } from "./components/sidebar/sidebar.component";
import { SnackbarComponent } from "./components/snackbar/snackbar.component";
import { AuthenticationGuard } from "./guards/authentication.guard";
import { SidebarPosition } from './services/sidebar.service';





export class ApplicationRoutes
{
    public static RoutesChangedEvent: Subject<Routes> = new Subject<Routes>();
    public static AppRoutes: Routes = [];
    public static prepend( routes: Routes ): void
    {
        ApplicationRoutes.AppRoutes.unshift( ...routes );
        ApplicationRoutes.RoutesChangedEvent.next( routes );
    }

    public static append( routes: Routes ): void
    {
        ApplicationRoutes.AppRoutes.push( ...routes );
        ApplicationRoutes.RoutesChangedEvent.next( routes );
    }
}


ApplicationRoutes.RoutesChangedEvent.subscribe( ( routes ) =>
{

    if ( ApplicationRoutes.AppRoutes.length == 6 ) // primary route
    {
        // Secure all routes
        ApplicationRoutes.AppRoutes.forEach( value =>
        {
            value.canActivate = [AuthenticationGuard];
            value.canActivateChild = [AuthenticationGuard];
        })
    }

    //routes


    //// Add sidebar to main wildcard path
    //routes
    //    .filter( function ( value )
    //    {
    //        return "**" == value.path &&
    //            null != value.children &&
    //            null == value.outlet;
    //    } )
    //    .map( function ( value )
    //    {
    //        var _a;
    //        ( _a = value.children ).push.apply( _a, SidebarRoutes );
    //    } );
} );


//// Primary route
//ApplicationRoutes.AppRoutes =
//    [
//        {
//            path: "",
//            component: FrameworkComponent,
//            //canActivate: [AuthenticationGuard],
//            //canActivateChild: [AuthenticationGuard],
//            children:
//                [

//                ],
//        }
//    ]


export const SnackbarRoutes: Routes = [
    {
        path: "",
        outlet: "snackbar",
        component: SnackbarComponent
    }
];

ApplicationRoutes.append(
    [
        ...SnackbarRoutes,
    ] );

export const AppDialogRoutes: Routes = [
    {
        path: "dialog",
        component: DialogComponent,
        outlet: "dialog",
        children:
            [
                {
                    path: "about",
                    component: AboutComponent,
                    data:
                    {
                        title: "About",
                        allowClose: true
                    }
                },
            ]
    },
];

ApplicationRoutes.append(
    [
        ...AppDialogRoutes,
    ] );

/** Framework dialog routes. */
export class DialogRoutes
{
    /**
     * Append routes.
     * @param routes Routes.
     */
    public static append( routes: Routes ): void
    {
        AppDialogRoutes[0].children.push( ...routes );
    }
}

export const AppSidebarRoutes: Routes = [
    {
        path: "topsidebar",
        outlet: "topsidebar",
        component: TopSideBarComponent,
        children:
            [
            ]
    },
    {
        path: "leftsidebar",
        outlet: "leftsidebar",
        component: LeftSideBarComponent,
        children:
            [
            ]
    },
    {
        path: "rightsidebar",
        outlet: "rightsidebar",
        component: RightSideBarComponent,
        children:
            [
            ]
    },
    {
        path: "bottomsidebar",
        outlet: "bottomsidebar",
        component: BottomSideBarComponent,
        children:
            [
            ]
    },
];


ApplicationRoutes.append(
    [
        ...AppSidebarRoutes,
    ] );


/** Framework sidebar routes. */
export class SidebarRoutes
{
    /**
     * Append routes.
     * @param routes the sidebar route your have registered route.
     * @param positin which sidebar to register routes with.
     */
    public static append( routes: Routes, pos: SidebarPosition ): void
    {
        AppSidebarRoutes[pos].children.push( ...routes );
    }
}

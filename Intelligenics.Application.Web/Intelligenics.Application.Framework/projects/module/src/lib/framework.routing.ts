//////////////////////////////////////////////////////////////////////////
///
/// Intelligenics Angular Application Framework
/// Copyright(C) 2019 Intelligenics Ltd.  
/// 
/// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
/// to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute,
/// sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
/// subject to the following conditions:
/// 
/// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
/// 
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
/// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
/// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
/// 
/// Contact Information
/// 
/// Name: Matthew Parton M.Sc.
/// Feel free to contact me using the following details

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

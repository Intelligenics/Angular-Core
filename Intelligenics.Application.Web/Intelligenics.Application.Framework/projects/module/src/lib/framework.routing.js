"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var about_component_1 = require("./components/about/about.component");
var dialog_component_1 = require("./components/dialog/dialog.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var snackbar_component_1 = require("./components/snackbar/snackbar.component");
var authentication_guard_1 = require("./guards/authentication.guard");
var ApplicationRoutes = /** @class */ (function () {
    function ApplicationRoutes() {
    }
    ApplicationRoutes.prepend = function (routes) {
        var _a;
        (_a = ApplicationRoutes.AppRoutes).unshift.apply(_a, routes);
        ApplicationRoutes.RoutesChangedEvent.next(routes);
    };
    ApplicationRoutes.append = function (routes) {
        var _a;
        (_a = ApplicationRoutes.AppRoutes).push.apply(_a, routes);
        ApplicationRoutes.RoutesChangedEvent.next(routes);
    };
    ApplicationRoutes.RoutesChangedEvent = new rxjs_1.Subject();
    ApplicationRoutes.AppRoutes = [];
    return ApplicationRoutes;
}());
exports.ApplicationRoutes = ApplicationRoutes;
ApplicationRoutes.RoutesChangedEvent.subscribe(function (routes) {
    if (ApplicationRoutes.AppRoutes.length == 6) // primary route
     {
        // Secure all routes
        ApplicationRoutes.AppRoutes.forEach(function (value) {
            value.canActivate = [authentication_guard_1.AuthenticationGuard];
            value.canActivateChild = [authentication_guard_1.AuthenticationGuard];
        });
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
});
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
exports.SnackbarRoutes = [
    {
        path: "",
        outlet: "snackbar",
        component: snackbar_component_1.SnackbarComponent
    }
];
ApplicationRoutes.append(exports.SnackbarRoutes.slice());
exports.AppDialogRoutes = [
    {
        path: "dialog",
        component: dialog_component_1.DialogComponent,
        outlet: "dialog",
        children: [
            {
                path: "about",
                component: about_component_1.AboutComponent,
                data: {
                    title: "About",
                    allowClose: true
                }
            },
        ]
    },
];
ApplicationRoutes.append(exports.AppDialogRoutes.slice());
/** Framework dialog routes. */
var DialogRoutes = /** @class */ (function () {
    function DialogRoutes() {
    }
    /**
     * Append routes.
     * @param routes Routes.
     */
    DialogRoutes.append = function (routes) {
        var _a;
        (_a = exports.AppDialogRoutes[0].children).push.apply(_a, routes);
    };
    return DialogRoutes;
}());
exports.DialogRoutes = DialogRoutes;
exports.AppSidebarRoutes = [
    {
        path: "topsidebar",
        outlet: "topsidebar",
        component: sidebar_component_1.TopSideBarComponent,
        children: []
    },
    {
        path: "leftsidebar",
        outlet: "leftsidebar",
        component: sidebar_component_1.LeftSideBarComponent,
        children: []
    },
    {
        path: "rightsidebar",
        outlet: "rightsidebar",
        component: sidebar_component_1.RightSideBarComponent,
        children: []
    },
    {
        path: "bottomsidebar",
        outlet: "bottomsidebar",
        component: sidebar_component_1.BottomSideBarComponent,
        children: []
    },
];
ApplicationRoutes.append(exports.AppSidebarRoutes.slice());
/** Framework sidebar routes. */
var SidebarRoutes = /** @class */ (function () {
    function SidebarRoutes() {
    }
    /**
     * Append routes.
     * @param routes the sidebar route your have registered route.
     * @param positin which sidebar to register routes with.
     */
    SidebarRoutes.append = function (routes, pos) {
        var _a;
        (_a = exports.AppSidebarRoutes[pos].children).push.apply(_a, routes);
    };
    return SidebarRoutes;
}());
exports.SidebarRoutes = SidebarRoutes;
//# sourceMappingURL=framework.routing.js.map
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var about_component_1 = require("./components/about/about.component");
var alert_component_1 = require("./components/alert/alert.component");
var dialog_component_1 = require("./components/dialog/dialog.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var snackbar_component_1 = require("./components/snackbar/snackbar.component");
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
exports.SnackbarRoutes = [
    {
        path: "",
        outlet: "snackbar",
        component: snackbar_component_1.SnackbarComponent
    }
];
ApplicationRoutes.append(__spreadArrays(exports.SnackbarRoutes));
exports.AppDialogRoutes = [
    {
        path: "dialog",
        component: dialog_component_1.DialogComponent,
        outlet: "dialog",
        children: [
            {
                path: "alert",
                component: alert_component_1.AlertComponent
            },
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
ApplicationRoutes.append(__spreadArrays(exports.AppDialogRoutes));
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
ApplicationRoutes.append(__spreadArrays(exports.AppSidebarRoutes));
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
//# sourceMappingURL=routing.js.map
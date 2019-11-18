"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var router_1 = require("@angular/router");
var framework_routing_1 = require("../../../module/src/lib/framework.routing");
var public_api_1 = require("../../../module/src/public-api");
var content_component_1 = require("./components/content.component");
var navigation_component_1 = require("./components/navigation.component");
var test_component_1 = require("./components/test.component");
framework_routing_1.ApplicationRoutes.append([
    // Primary Routes
    {
        path: '',
        component: test_component_1.TestComponent
    },
]);
framework_routing_1.DialogRoutes.append([
    // Primary Routes
    {
        path: 'content',
        component: content_component_1.ContentComponent
    },
]);
framework_routing_1.SidebarRoutes.append([
    // Primary Routes
    {
        path: 'content',
        component: navigation_component_1.NavigationComponent
    },
], public_api_1.SidebarPosition.Left);
framework_routing_1.SidebarRoutes.append([
    // Primary Routes
    {
        path: 'content',
        component: navigation_component_1.NavigationComponent
    },
], public_api_1.SidebarPosition.Right);
framework_routing_1.SidebarRoutes.append([
    // Primary Routes
    {
        path: 'content',
        component: content_component_1.ContentComponent
    },
], public_api_1.SidebarPosition.Top);
framework_routing_1.SidebarRoutes.append([
    // Primary Routes
    {
        path: 'content',
        component: content_component_1.ContentComponent
    },
], public_api_1.SidebarPosition.Bottom);
exports.AppRouting = router_1.RouterModule.forRoot(framework_routing_1.ApplicationRoutes.AppRoutes, {
// enableTracing: true
});
//# sourceMappingURL=test-harness.routing.js.map
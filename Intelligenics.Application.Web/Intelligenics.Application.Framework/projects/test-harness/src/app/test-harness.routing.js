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
/// LinkedIn Profile: https://www.linkedin.com/in/intelligenics/
/// Website: http://www.intelligenics.co.uk
/// Email: matthewparton@intelligenics.co.uk
///
//////////////////////////////////////////////////////////////////////////
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
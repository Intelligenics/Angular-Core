"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var router_1 = require("@angular/router");
var application_framework_1 = require("@intelligenics/application-framework");
var test_component_1 = require("./components/test/test.component");
application_framework_1.ApplicationRoutes.prepend([
    // Primary Routes
    {
        path: '',
        children: [
            {
                path: '',
                component: test_component_1.TestComponent
            }
        ]
    }
]);
exports.AppRouting = router_1.RouterModule.forRoot(application_framework_1.ApplicationRoutes.AppRoutes, {
// enableTracing: true
});
//# sourceMappingURL=test-harness.routing.js.map
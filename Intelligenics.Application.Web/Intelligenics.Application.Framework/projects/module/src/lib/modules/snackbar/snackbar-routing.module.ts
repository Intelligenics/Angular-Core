import { Routes } from "@angular/router";
import { ApplicationRoutes } from "../../framework.routing";
import { SnackbarComponent } from "./components/snackbar.component";

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
    ]);

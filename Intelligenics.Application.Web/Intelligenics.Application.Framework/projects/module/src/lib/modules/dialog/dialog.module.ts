import { CommonModule } from "@angular/common";
import { DialogComponent } from "./components/dialog.component";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

@NgModule({
    imports:
        [
            HttpClientModule,
            CommonModule,
        ],
    exports:
        [
            DialogComponent,
        ],
    declarations:
        [
            DialogComponent, 
        ],
    providers:
        [
        ]
})
export class DialogModule { }

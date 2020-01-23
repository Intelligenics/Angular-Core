import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StylesComponent } from './components/styles.component';



/**
 * This module contains all the components need by the application to function
 * and provides common services to the all other modules.
 * */
@NgModule( {
    imports:
        [
            HttpClientModule,
            CommonModule,
            RouterModule,
        ],
    exports:
        [
        ],
    declarations:
        [
          StylesComponent,
        ],
    providers:
        [
        ],
} )
export class StylesModule { }

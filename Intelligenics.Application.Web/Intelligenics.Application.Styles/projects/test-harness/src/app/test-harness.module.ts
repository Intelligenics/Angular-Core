import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StylesModule } from '../../../module/src/lib/styles.module';

import { AppRouting } from './test-harness.routing';
import { AppComponent } from './components/app.component';

@NgModule(
  {
    declarations:
      [
        AppComponent,
      ],
    imports:
      [
        BrowserModule,
        AppRouting,
        StylesModule,
      ],
    providers:
      [
      ],
    bootstrap:
      [
        AppComponent
      ]
  } )
export class AppModule { }

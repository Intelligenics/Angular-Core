import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StylesModule } from '../../../module/src/lib/styles.module';
import { FrameworkModule } from '@intelligenics/application-framework';

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
        BrowserAnimationsModule,
        BrowserModule,
        AppRouting,
        FrameworkModule,
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

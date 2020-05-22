import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FrameworkModule } from '../../../module/src/lib/framework.module';

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
        FrameworkModule,
      ],
    providers:
      [
      ],
    bootstrap:
      [
        AppComponent
      ]
  })
export class AppModule { }

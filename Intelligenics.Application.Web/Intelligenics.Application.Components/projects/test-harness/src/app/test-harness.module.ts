import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../../module/src/lib/components.module';
import { FrameworkModule } from '@intelligenics/application-framework';

import { AppRouting } from './test-harness.routing';
import { AppComponent } from './components/app.component';
import { TestComponent } from './components/test/test.component';

@NgModule(
  {
    declarations:
      [
        AppComponent,
        TestComponent,
      ],
    imports:
      [
        BrowserAnimationsModule,
        BrowserModule,
        AppRouting,
        FrameworkModule,
        ComponentsModule,
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

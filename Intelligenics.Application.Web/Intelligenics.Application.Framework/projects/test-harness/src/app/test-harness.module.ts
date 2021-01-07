import { AppComponent } from './components/app.component';
import { AppRouting } from './test-harness.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FrameworkModule } from '../../../module/src/lib/framework.module';
import { NgModule } from '@angular/core';

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

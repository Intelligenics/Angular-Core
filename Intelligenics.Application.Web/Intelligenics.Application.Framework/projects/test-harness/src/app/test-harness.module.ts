import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrameworkModule } from '../../../module/src/lib/framework.module';

import { AppComponent } from './components/app.component';
import { ContentComponent } from './components/content.component';
import { NavigationComponent } from './components/navigation.component';
import { TestComponent } from './components/test.component';
import { AppRouting } from './test-harness.routing';

@NgModule(
    {
        declarations:
            [
                AppComponent,
                TestComponent,
                ContentComponent,
                NavigationComponent,
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
                AppComponent,
            ]
    } )
export class AppModule { }

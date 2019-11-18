import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs navbar-dark bg-dark">
      <a class="navbar-brand" routerLink="/">Test Harness</a>
  </nav>
  <int-app-framework></int-app-framework>`,
  styleUrls: ['app.component.scss']
} )
export class AppComponent
{
    constructor( router: Router )
    {
        console.log( router.config );
    }
}

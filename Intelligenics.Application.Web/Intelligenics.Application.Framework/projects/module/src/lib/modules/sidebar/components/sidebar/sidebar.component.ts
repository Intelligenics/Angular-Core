import { Component, ViewEncapsulation } from '@angular/core';

@Component(
    {
        selector: "int-sidebar",
        encapsulation: ViewEncapsulation.None,
        styleUrls: ['sidebar.component.scss'],
        templateUrl: './sidebar.component.html'
    })
export class SidebarComponent 
{
    constructor()
    {
    }
}


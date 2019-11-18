import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export class Feature
{
    public id: number;
    public name: string; 
    public icon: string; 

    constructor()
    { 
    }
}



@Component({
    selector: 'int-app-navigation',
    templateUrl: './navigation.component.html',
    host: { class: 'int-app-navigation' }
})
export class NavigationComponent implements OnInit
{
    public items: Array<Feature>;

    constructor(private router: Router)
    {
        this.items = [];

        this.items.push({ id: 1, name: "Home", icon: "fas fa-blender-phone" });
        this.items.push({ id: 1, name: "Doors", icon: "fas fa-door-open" });
        this.items.push({ id: 1, name: "Windows", icon: "far fa-window-maximize" });
        this.items.push({ id: 1, name: "Property", icon: "fas fa-home" });
    }


    public ngOnInit(): void
    {
    }


    public onShowVersion(): void
    {
        this.router.navigate([{ outlets: { dialog: "dialog/version" } }]);
        // this.router.navigate(
        //     [{ outlets: { 'dialog': ['version'] } }],

        // ); 
    }

}

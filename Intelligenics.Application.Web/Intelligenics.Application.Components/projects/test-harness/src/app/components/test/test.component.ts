import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../../../../../module/src/public-api';

@Component({
    selector: 'app-test',
    templateUrl: 'test.component.html',
    styleUrls: ['test.component.scss']
})
export class TestComponent implements OnInit
{

    public items: Array<IMenuItem>;

    constructor() { }

    public ngOnInit(): void
    {
        this.items = [];

        this.items.push({ items: null, text: "Activity", icon: "fas fa-home", hasChildren: true });
        this.items.push({ items: null, text: "Notifications", icon: "fas fa-door-open", hasChildren: true });
        this.items.push({ items: null, text: "Servicing", icon: "fas fa-icon", hasChildren: true });
        this.items.push({ items: null, text: "Service updates", icon: "fas fa-icon", hasChildren: true });
        this.items.push({ items: null, text: "Fuel level", icon: "fas fa-icon", hasChildren: true });


        this.onItemExpanded(this.items[0]);
    }

    public onItemClicked(item: IMenuItem): void
    {
        console.log(item);
    }

    public onItemExpanded(item: IMenuItem): void
    {
        //setTimeout(() =>
        //{
            let items = [];

            items.push({ items: null, id: 1, text: "Activity", icon: "fas fa-home", hasChildren: true });
            items.push({ items: null, id: 2, text: "Notifications", icon: "fas fa-door-open", hasChildren: true });
            items.push({ items: null, id: 3, text: "Servicing", icon: "fas fa-icon", hasChildren: true });
            items.push({ items: null, id: 4, text: "Service updates", icon: "fas fa-icon", hasChildren: true });
            items.push({ items: null, id: 5, text: "Fuel level", icon: "fas fa-icon", hasChildren: true });

            item.items = items;
        //}, 3000);
    }

}

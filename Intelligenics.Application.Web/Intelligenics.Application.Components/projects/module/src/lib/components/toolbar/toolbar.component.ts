// Angular
import { Component, EventEmitter, Input, Output, ViewEncapsulation, ContentChild, TemplateRef } from '@angular/core';
import { RootTemplateComponent, ChildTemplateComponent } from './template.component';

// Types  

@Component({
    selector: 'int-components-navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: { class: 'int-components-navigation' }
})
export class NavigationComponent 
{
    @Input()
    public items: Array<any>;

    @Output("click")
    public itemClickedEvent: EventEmitter<any>;

    @Output("expand")
    public itemExpandedEvent: EventEmitter<any>;
     
    @ContentChild(RootTemplateComponent, { static: false })
    public rootTemplate: RootTemplateComponent;

    @ContentChild(ChildTemplateComponent, { static: false })
    public childTemplate: ChildTemplateComponent;

    constructor()
    {
        this.itemClickedEvent = new EventEmitter<any>();
        this.itemExpandedEvent = new EventEmitter<any>();
    }

    public onItemClicked(item: any)
    {
        this.itemClickedEvent.emit(item);
    }

    public onItemExpanded(item: any)
    {
        this.itemExpandedEvent.emit(item);
        console.log("expanded");
    }

    public onChildItemClicked(item: any)
    {
        this.itemClickedEvent.emit(item);
        console.log("onChildItemClicked");
    }

    public onChildItemExpanded(item: any)
    {
        this.itemExpandedEvent.emit(item);
        console.log("onChildItemExpanded");
    }
}

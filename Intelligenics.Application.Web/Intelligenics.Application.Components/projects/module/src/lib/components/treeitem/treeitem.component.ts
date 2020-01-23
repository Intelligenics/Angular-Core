// Angular
import { Component, Input, Output, EventEmitter, ViewEncapsulation, TemplateRef, ContentChild } from '@angular/core';
import { IMenuItem } from '../../models/menu.model';
import { Observable } from 'rxjs';
import { ChildTemplateComponent, RootTemplateComponent } from '../navigation/template.component';

// Types  

@Component({
    selector: 'int-components-treeitem',
    templateUrl: 'treeitem.component.html',
    styleUrls: ['treeitem.component.scss'],
    encapsulation:ViewEncapsulation.Emulated,
    host: { class: 'int-components-treeitem' }
})
export class TreeItemComponent 
{ 
    @Input()
    public item: any;

    @Input()
    public text: string;

    @Input()
    public icon: string;

    @Input()
    public iconColour: string;

    @Input()
    public items: Array<any>;

    @Input()
    public isExpanded: boolean;

    @Input()
    public hasChildren: boolean;

    @Output("click")
    public itemClickedEvent: EventEmitter<any>;

    @Output("expand")
    public itemExpandedEvent: EventEmitter<any>;

    @Input()
    public rootTemplate: RootTemplateComponent;

    @Input()
    public childTemplate: ChildTemplateComponent;

    constructor()
    {
        this.itemClickedEvent = new EventEmitter<any>();
        this.itemExpandedEvent = new EventEmitter<any>();
    }

    public onItemClicked($event: MouseEvent, item: any)
    { 
        this.itemClickedEvent.emit(item);        
        $event.stopPropagation();
    }

    public onItemExpanded($event: MouseEvent, item: any)
    {
        item.isExpanded = !item.isExpanded;

        this.itemExpandedEvent.emit(item);
        console.log("expanded");
        $event.stopPropagation();
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

    public GetTemplate(): any
    {
        if (null != this.rootTemplate)
            return this.rootTemplate

        return this.childTemplate;
    }
}

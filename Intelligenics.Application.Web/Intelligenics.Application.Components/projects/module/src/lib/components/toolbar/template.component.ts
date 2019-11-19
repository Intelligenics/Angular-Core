import { Component, ContentChild, TemplateRef, Input } from "@angular/core";



export class BaseTemplateComponent
{
    @ContentChild(TemplateRef, { static: false })
    public template: TemplateRef<any>;

    @Input()
    public item: any; 
}

/**
 * The options element used for select boxes
 */
@Component( {
    selector: "int-navigation-template-root",
    templateUrl: "template.component.html",
    host: { class: "int-navigation-template-root" }
} )
export class RootTemplateComponent extends BaseTemplateComponent
{
    @Input()
    public innerTemplate: RootTemplateComponent;
}

/**
 * The options element used for select boxes
 */
@Component({
    selector: "int-navigation-template-child",
    templateUrl: "template.component.html",
    host: { class: "int-navigation-template-child" }
})
export class ChildTemplateComponent extends BaseTemplateComponent
{
    @Input()
    public innerTemplate: RootTemplateComponent;
}

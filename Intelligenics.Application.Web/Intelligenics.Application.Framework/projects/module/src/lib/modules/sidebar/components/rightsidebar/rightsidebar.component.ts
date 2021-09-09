import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, HostBinding, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";

import { BaseComponent } from "../base/base.component";
import { SidebarPosition } from "../../models/sidebar.models";
import { SidebarService } from "../../services/sidebar.service";

@Component(
    {
        animations:
            [

                trigger('triggerOpenClose',
                    [
                        state('closed',
                            style({
                                opacity: 1,
                                right: '-100%'
                            })),
                        state('open',
                            style({
                                opacity: 1,
                                right: '0'
                            })),
                        transition('open => closed',
                            [
                                animate('.5s ease-in'),
                            ]),
                        transition('closed => open',
                            [
                                animate('.5s ease-out'),
                            ])
                    ]),
            ],
        host: { class: 'int-rightsidebar' },
        selector: "int-rightsidebar",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styleUrls: ['rightsidebar.component.scss'],
        templateUrl: './rightsidebar.component.html'
    })
export class RightSideBarComponent extends BaseComponent
{
    constructor(
        componentFactoryResolver: ComponentFactoryResolver, 
        sidebarService: SidebarService,
        changeDetectionRef: ChangeDetectorRef)
    {
        super(componentFactoryResolver, changeDetectionRef, sidebarService, SidebarPosition.Right);
    }
}

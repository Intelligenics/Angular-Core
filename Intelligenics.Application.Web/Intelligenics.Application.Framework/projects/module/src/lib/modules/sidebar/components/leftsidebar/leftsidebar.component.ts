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
                                opacity: 0,
                                left: '-100%'
                            })),
                        state('open',
                            style({
                                opacity: 1,
                                left: '0'
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
        selector: "int-leftsidebar",
        host: { class: 'int-leftsidebar' },
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styleUrls: ['leftsidebar.component.scss'],
        templateUrl: './leftsidebar.component.html'
    })
export class LeftSideBarComponent extends BaseComponent
{
    constructor(
        componentFactoryResolver: ComponentFactoryResolver,
        sidebarService: SidebarService,
        changeDetectionRef: ChangeDetectorRef)
    {
        super(componentFactoryResolver, changeDetectionRef, sidebarService, SidebarPosition.Left);
    }
}

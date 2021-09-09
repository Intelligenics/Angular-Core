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
                                top: '-20%'
                            })),
                        state('open',
                            style({
                                opacity: 1,
                                top: '0'
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
        host: { class: 'int-topsidebar' },
        selector: 'int-topsidebar',
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styleUrls: ['topsidebar.component.scss'],
        templateUrl: './topsidebar.component.html'
    })
export class TopSideBarComponent extends BaseComponent
{
    constructor(
        componentFactoryResolver: ComponentFactoryResolver, 
        sidebarService: SidebarService,
        changeDetectionRef: ChangeDetectorRef)
    {
        super(componentFactoryResolver, changeDetectionRef, sidebarService, SidebarPosition.Top);
    }
}
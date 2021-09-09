import { ChangeDetectorRef, Component, ComponentFactoryResolver, HostBinding, HostListener, Input, OnDestroy, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { SidebarClosingEventArgs, SidebarOpenEventArgs, SidebarPosition } from '../../models/sidebar.models';

import { SidebarService } from '../../services/sidebar.service';
import { Subscription } from 'rxjs';


@Component(
    {
        
        selector: "int-base-component",    
        template: ''
    })
export abstract class BaseComponent implements OnDestroy
{
    @HostBinding('@triggerOpenClose')
    state: string;
    allowClose: boolean;

    private readonly subscriptions: Array<Subscription>;

    @ViewChild('dynamic', { read: ViewContainerRef })
    viewContainerRef: ViewContainerRef;

    constructor(
        protected readonly componentFactoryResolver: ComponentFactoryResolver,
        protected readonly changeDetectionRef: ChangeDetectorRef,
        protected readonly sidebarService: SidebarService,
        protected readonly position: SidebarPosition)
    {
        this.subscriptions = [];
        this.state = "closed"

        this.subscriptions.push(this.sidebarService.sidebarOpen$.subscribe((args) =>
        {
            this.open(args);
        }));

        this.subscriptions.push(this.sidebarService.sidebarClose$.subscribe(() =>
        {
            this.close();
        }));
    }

    ngOnDestroy(): void
    {
        this.subscriptions.forEach(value => value.unsubscribe());
    }

    onSidebarCloseClicked(): void
    {
        this.close();
    }

    /**
     * 
     * @param event If we click on a sidebar then dont allow propergation of the click beyond the sidebar 
     * as its probably a button being clicked inside it
     */
    @HostListener('click', ['$event'])
    onMouseClicked(event: MouseEvent)
    { 
        event.stopPropagation();
    }

    @HostListener('document:click', ['$event'])
    onBodyClicked(event: KeyboardEvent)
    {
        this.close();
    }

    @HostListener('document:keydown.escape', ['$event'])
    onEscapePressed(event: KeyboardEvent)
    {
        this.close();
    }

    open(args: SidebarOpenEventArgs)
    {
        console.log("opening")
        if (this.position == args.position)
        {
            const factory = this.componentFactoryResolver.resolveComponentFactory(args.component);
            this.viewContainerRef.clear();

            this.state = 'open';
            const componentRef = this.viewContainerRef.createComponent<any>(factory);
            componentRef.changeDetectorRef.detectChanges();
        }
    }

    close()
    {
        console.log("closing")
        let args = new SidebarClosingEventArgs();

        this.sidebarService.notifySidebarClosing(args);

        if (!args.allowClose) return;

        this.state = 'closed';

        this.changeDetectionRef.detectChanges();
    }

}


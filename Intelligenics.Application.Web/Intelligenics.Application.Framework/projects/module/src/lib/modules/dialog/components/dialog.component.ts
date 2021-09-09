import { ChangeDetectorRef, Component, ComponentFactoryResolver, HostBinding, HostListener, OnDestroy, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DialogClosingEventArgs, DialogOpenEventArgs, DialogOptions } from '../models/dialog.models';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { DialogService } from '../services/dialog.service';
import { Subscription } from 'rxjs';
import { ViewChild } from '@angular/core';

@Component({
    animations:
        [
            trigger('backdropOpenClose',
                [
                    state('open',
                        style({
                            opacity: 1,
                            bottom: '0'
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
            trigger('dialogOpenClose',
                [
                    state('closed',
                        style({
                            opacity: 1,
                            top: '100%',
                            bottom: '-100%',
                        })),
                    state('open',
                        style({
                            opacity: 1,
                            top: '0',
                            bottom: '-100%',
                        })),
                    transition('open => closed',
                        [
                            animate('.5s  cubic-bezier(0,.24,1,.77)'),
                        ]),
                    transition('closed => open',
                        [
                            animate('.5s cubic-bezier(0,.24,1,.77)'),
                        ])
                ]),
        ],
    selector: 'int-dialog',
    styleUrls: ['dialog.component.scss'],
    host: { class: 'int-dialog' },
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'dialog.component.html'
})
export class DialogComponent implements OnDestroy
{
    // @HostBinding('@triggerOpenClose')
    state: string;

    title: string;
    message: string;
    dialogOptions: DialogOptions;
 
    allowClose: boolean = true;
    private readonly subscriptions: Array<Subscription> = [];


    @ViewChild('dynamic', { read: ViewContainerRef })
    viewContainerRef: ViewContainerRef;

    constructor(
        protected readonly componentFactoryResolver: ComponentFactoryResolver,
        protected readonly changeDetectionRef: ChangeDetectorRef,
        private readonly dialogService: DialogService)
    {
        this.state = "closed";
        this.subscriptions.push(this.dialogService.dialogOpen$.subscribe((args) =>
        {
            this.open(args);
        }));

        this.subscriptions.push(this.dialogService.dialogClosed$.subscribe(() =>
        {
            this.close();
        }));
    }

    ngOnDestroy(): void
    {
        this.subscriptions.forEach(value => value.unsubscribe());
    }

    onDialogCloseClicked(): void
    {
        this.close();
    }

    onOptionSelected($event: DialogOptions): void
    {
        this.close($event);
    }

    @HostListener('document:keydown.escape', ['$event'])
    onEscapePressed($event: KeyboardEvent)
    {
        this.close();
    }

    open(args: DialogOpenEventArgs)
    {
        const factory = this.componentFactoryResolver.resolveComponentFactory(args.component);
        this.viewContainerRef.clear();

        const componentRef = this.viewContainerRef.createComponent<any>(factory);
        componentRef.changeDetectorRef.detectChanges();
        this.state = 'open';
    }

    close($event: DialogOptions = null)
    {
        let args = new DialogClosingEventArgs();
        args.selectedOption = $event;
        this.dialogService.notifyDialogClosing(args);

        if (!args.allowClose) return;

        this.state = 'closed';
    }
}

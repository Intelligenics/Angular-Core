import { Component, HostListener, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { bottomSidebarOpenClose, leftSidebarOpenClose, rightSidebarOpenClose, topSidebarOpenClose } from '../../animations/sidebar.animation';
import { FrameworkConstants } from '../../models/framework.constants';
import { SidebarClosingEventArgs, SidebarPosition, SidebarService } from '../../services/sidebar.service';

export class SidebarComponent implements OnDestroy
{
    public state: string;
    public allowClose: boolean;
    private readonly subscriptions: Array<Subscription>;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router,
        private readonly sidebarService: SidebarService,
        private readonly position: SidebarPosition )
    {
        this.state = null;
        this.subscriptions = [];

        this.subscriptions.push( this.activatedRoute.data.subscribe( () =>
        {
            const navigation: any = router.getCurrentNavigation();

            if ( null != navigation && null != navigation.extras && null != navigation.extras.state )
            {
                this.allowClose = navigation.extras.state.allowClose;
            }
        } ) );

        this.subscriptions.push( this.sidebarService.sidebarCloseEvent.subscribe( () =>
        {
            this.close();
        } ) );
    }

    public ngOnDestroy(): void
    {
        this.subscriptions.forEach( value => value.unsubscribe() );
    }

    public onSidebarCloseClicked(): void
    {
        this.close();
    }

    @HostListener( 'click', ['$event'] )
    public onMouseClicked( event: MouseEvent )
    {
        this.close();
        event.stopPropagation();
    }

    @HostListener( 'document:keydown.escape', ['$event'] )
    public onEscapePressed( event: KeyboardEvent )
    {
        this.close();
    }

    public close()
    {
        let args = new SidebarClosingEventArgs();

        this.sidebarService.notifySidebarClosing( args );

        if ( !args.allowClose ) return;

        this.state = 'closed';

        console.log( this.state );

        setTimeout( () =>
        {
            let command: any = [];
            switch ( this.position )
            {
                case SidebarPosition.Left:
                    command = [{ outlets: { leftsidebar: null } }];
                    break;
                case SidebarPosition.Right:
                    command = [{ outlets: { rightsidebar: null } }];
                    break;
                case SidebarPosition.Top:
                    command = [{ outlets: { topsidebar: null } }];
                    break;
                case SidebarPosition.Bottom:
                    command = [{ outlets: { bottomsidebar: null } }];
                    break;
                default:
                    command = [{ outlets: { leftsidebar: null } }];
            }

            this.router.navigate( command, { skipLocationChange: true } );

        },
                    FrameworkConstants.SIDEBARTIMEOUT
        );
    }
}

@Component(
    {
        animations:
            [
                topSidebarOpenClose,
            ],
        encapsulation: ViewEncapsulation.None,
        host: { class: 'int-app-topsidebar' },
        selector: "int-app-topsidebar",
        styleUrls: ['sidebar.component.scss'],
        template: `<div class="int-app-topsidebar__sidebar" [@topSidebarOpenClose]="state">
                    <router-outlet></router-outlet>
                  </div>`
    } )
export class TopSideBarComponent extends SidebarComponent
{
    constructor( activatedRoute: ActivatedRoute, router: Router, sidebarService: SidebarService )
    {
        super( activatedRoute, router, sidebarService, SidebarPosition.Top );
    }
}

@Component(
    {
        animations:
            [
                leftSidebarOpenClose,
            ],
        selector: "int-app-leftsidebar",
        styleUrls: ['sidebar.component.scss'],
        template: `<div class="int-app-leftsidebar__sidebar" [@leftSidebarOpenClose]="state">
                    <router-outlet></router-outlet>
                  </div>`
    } )
export class LeftSideBarComponent extends SidebarComponent
{
    constructor(
        activatedRoute: ActivatedRoute,
        router: Router,
        sidebarService: SidebarService )
    {
        super( activatedRoute, router, sidebarService, SidebarPosition.Left );
    }
}

@Component(
    {
        animations:
            [
                rightSidebarOpenClose,
            ],
        selector: "int-app-rightsidebar",
        styleUrls: ['sidebar.component.scss'],
        template: `<div class="int-app-rightsidebar__sidebar" [@rightSidebarOpenClose]="state">
                    <router-outlet></router-outlet>
                  </div>`
    } )
export class RightSideBarComponent extends SidebarComponent
{

    constructor(
        activatedRoute: ActivatedRoute,
        router: Router,
        sidebarService: SidebarService )
    {
        super( activatedRoute, router, sidebarService, SidebarPosition.Right );
    }
}

@Component(
    {
        animations:
            [
                bottomSidebarOpenClose,
            ],
        selector: "int-app-bottomsidebar",
        styleUrls: ['sidebar.component.scss'],
        template: `<div class="int-app-bottomsidebar__sidebar" [@bottomSidebarOpenClose]="state">
                    <router-outlet></router-outlet>
                  </div>`
    } )
export class BottomSideBarComponent extends SidebarComponent
{

    constructor(
        activatedRoute: ActivatedRoute,
        router: Router,
        sidebarService: SidebarService )
    {
        super( activatedRoute, router, sidebarService, SidebarPosition.Bottom );
    }
}

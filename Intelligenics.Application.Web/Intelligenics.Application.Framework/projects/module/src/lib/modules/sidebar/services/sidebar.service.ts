import { Injectable, Type } from "@angular/core";
import { SidebarClosingEventArgs, SidebarOpenEventArgs, SidebarPosition } from "../models/sidebar.models";

import { Subject } from "rxjs";

/** Sidebar service. */
@Injectable({ providedIn: 'root' })
export class SidebarService
{
    public sidebarOpen$: Subject<SidebarOpenEventArgs> = new Subject<SidebarOpenEventArgs>();
    public sidebarClosing$: Subject<SidebarClosingEventArgs> = new Subject<SidebarClosingEventArgs>();
    public readonly sidebarClose$: Subject<any> = new Subject<SidebarPosition>();


    /**
     * Show the sidebar.
     * @param route the sidebar route to load.
     * @param position the sidebar position to show. left, right, top or bottom
     * @param allowClose indicates if the sidebar can be closed.
     */
    public show(component: Type<any>, position: SidebarPosition, allowClose: boolean = true): void
    {
        this.sidebarOpen$.next(new SidebarOpenEventArgs(component, position, allowClose));
    }


    /**
     * Closes the sidebar
     */
    public close(): void
    {
        this.sidebarClose$.next();
    }

    /**
     * notification for all subscribers that the sidebar is closing
     * @param args allowing option to prevent the closure of the sidebar
     */
    public notifySidebarClosing(args: SidebarClosingEventArgs): void
    {
        this.sidebarClosing$.next(args);
    }

}

//////////////////////////////////////////////////////////////////////////
///
/// Intelligenics Angular Application Framework
/// Copyright(C) 2019 Matthew Parton M.Sc
///
/// This program is free software: you can redistribute it and / or modify
/// it under the terms of the GNU General Public License as published by
/// the Free Software Foundation, either version 3 of the License, or
/// (at your option) any later version.
///
/// This program is distributed in the hope that it will be useful,
/// but WITHOUT ANY WARRANTY; without even the implied warranty of
/// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
/// GNU General Public License for more details.
///
/// You should have received a copy of the GNU General Public License
/// along with this program. If not, see < https://www.gnu.org/licenses/>.
///
/// Contact information
///
/// Name: Matthew Parton M.Sc
///
/// LinkedIn Profile: https://www.linkedin.com/in/intelligenics/
/// Website: http://www.intelligenics.co.uk
/// Email: matthewparton@intelligenics.co.uk
///
//////////////////////////////////////////////////////////////////////////

import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Subject } from "rxjs";

/** Sidebar position. */
export enum SidebarPosition
{
    Top = 0,
    Left = 1,
    Right = 2,
    Bottom = 3
}

/** Sidebar changed event. */
export class SidebarClosingEventArgs
{
    /**
     * Option to prevent the sidebar closing
     */
    public allowClose: boolean;
    public position: SidebarPosition;

    constructor()
    {
        this.allowClose = true;
        this.position = SidebarPosition.Left;
    }
}

/** Sidebar service. */
@Injectable({ providedIn: 'root' })
export class SidebarService
{
    /** Sidebar closed event */
    public sidebarClosingEvent: Subject<SidebarClosingEventArgs>;
    public readonly sidebarCloseEvent: Subject<any>;

    constructor(private router: Router)
    {
        this.sidebarClosingEvent = new Subject<SidebarClosingEventArgs>();
        this.sidebarCloseEvent = new Subject<any>();
    }

    /**
     * Show the sidebar.
     * @param route the sidebar route to load.
     * @param position the sidebar position to show. left, right, top or bottom
     * @param allowClose indicates if the sidebar can be closed.
     */
    public show(route: string, position: SidebarPosition, allowClose: boolean = true): void
    {


        let lowerPosition = SidebarPosition[position].toLowerCase();
        let command: any = [];

        switch (position)
        {
            case SidebarPosition.Left:
                command = [{ outlets: { leftsidebar: `leftsidebar/${route}` } }]
                break;
            case SidebarPosition.Right:
                command = [{ outlets: { rightsidebar: `rightsidebar/${route}` } }]
                break;
            case SidebarPosition.Top:
                command = [{ outlets: { topsidebar: `topsidebar/${route}` } }]
                break;
            case SidebarPosition.Bottom:
                command = [{ outlets: { bottomsidebar: `bottomsidebar/${route}` } }]
                break;
        }


        this.router.navigate(
            command,
            {
                skipLocationChange: true,
                state:
                {
                    allowClose: allowClose
                }
            });
    }


    /**
     * Closes the sidebar
     */
    public close(): void
    {
        this.sidebarCloseEvent.next(null);
    }

    /**
     * notification for all subscribers that the sidebar is closing
     * @param args allowing option to prevent the closure of the sidebar
     */
    public notifySidebarClosing(args: SidebarClosingEventArgs): void
    {
        this.sidebarClosingEvent.next(args);
    }

}

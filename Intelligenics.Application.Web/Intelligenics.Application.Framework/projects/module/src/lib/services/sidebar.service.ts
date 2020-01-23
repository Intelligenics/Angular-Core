//////////////////////////////////////////////////////////////////////////
///
/// Intelligenics Angular Application Framework
/// Copyright(C) 2019 Intelligenics Ltd.  
/// 
/// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
/// to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute,
/// sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
/// subject to the following conditions:
/// 
/// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
/// 
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
/// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
/// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
/// 
/// Contact Information
/// 
/// Name: Matthew Parton M.Sc.
/// Feel free to contact me using the following details

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

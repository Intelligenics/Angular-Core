import { Type } from "@angular/core";

export enum SidebarPosition
{
    Top = 0,
    Left = 1,
    Right = 2,
    Bottom = 3
}

export class SidebarOpenEventArgs
{
    constructor(
        public component: Type<any>,
        public position: SidebarPosition,
        public allowClose: boolean)
    {
    }
}

export class SidebarClosingEventArgs
{
    public allowClose: boolean = true;
    public position: SidebarPosition = SidebarPosition.Left;
}

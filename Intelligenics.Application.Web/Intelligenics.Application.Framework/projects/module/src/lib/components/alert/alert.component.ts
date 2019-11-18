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

import { Component, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from "@angular/core";
import { DialogOptions, MessageType } from "../../services/dialog.service";

/** Dialog box component. */
@Component({
    selector: "int-app-alert",
    templateUrl: "alert.component.html",
    styleUrls: ['alert.component.scss']
})
export class AlertComponent
{
/** Options. */
    @Input()
    public dialogOptions: DialogOptions;

    @Input()
    public message: string;

    @Input()
    public messageType: MessageType;

    @Output()
    public optionSelected: EventEmitter<DialogOptions>;


    /** Dialog options. */

    /** Constants */
    public DialogOptions: any = DialogOptions;
    public MessageType: any = MessageType;

    constructor( )
    {
        this.optionSelected = new EventEmitter<DialogOptions>(); 
    }

    /** OK button clicked. */
    public onButtonClicked(option: DialogOptions): void
    {
        this.optionSelected.emit(option);
    }

    @HostListener('document:keydown.escape', ['$event'])
    public onEscapePressed(event: KeyboardEvent) 
    {
        this.optionSelected.emit(DialogOptions.Cancel);
    }
}

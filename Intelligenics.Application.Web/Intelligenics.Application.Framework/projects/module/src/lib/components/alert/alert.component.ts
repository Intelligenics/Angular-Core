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

import { Component, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from "@angular/core";
import { DialogOptions, MessageType } from "../../services/dialog.service";

/** Dialog box component. */
@Component({
    selector: "int-app-alert",
    templateUrl: "alert.component.html",
    encapsulation: ViewEncapsulation.None,
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

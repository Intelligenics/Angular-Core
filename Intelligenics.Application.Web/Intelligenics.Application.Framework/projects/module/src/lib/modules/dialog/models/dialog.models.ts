import { Type } from "@angular/core";

/**
 * The dialog buttons that can be shown as a group in the dialog window
 */
export enum DialogOptions
{
    YesNo = 1,
    OKCancel = 2,
    ConfirmCancel = 3,
    SaveCancel = 4,
    OK = 5,
    Yes = 6,
    No = 7,
    Confirm = 8,
    Cancel = 9,
    Close = 10,
    None = 11,
    Save = 12
}


/** Sidebar changed event. */
export class DialogOpenEventArgs
{
    constructor(
        public component: Type<any>,
        public allowClose: boolean)
    {
    }
}
/**
 * The arguments received from the dialog when it is closed
 */
export class DialogClosingEventArgs
{
    /**
     * Option to prevent the dialog closing when the the dialog is closed
     */
    public allowClose: boolean;

    /**
     * The option that was clicked when the user attempts to close the dialog.
     */
    public selectedOption: DialogOptions;

    constructor()
    {
        this.allowClose = true;
        this.selectedOption = DialogOptions.None;
    }
}

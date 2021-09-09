

/** Snackbar message type. */
export enum SnackbarMessageType
{
    Info = 1,
    Warning = 2,
    Error = 3,
    Question = 4
}

/** Snackbar event. */
export class SnackbarEventArgs
{
    /**
     * The snackbar message type
     */
    public messageType: SnackbarMessageType;
    /**
     * The message to be shown
     */
    public message: string;

    constructor(message: string, messageType: SnackbarMessageType)
    {
        this.message = message;
        this.messageType = messageType;
    }
}
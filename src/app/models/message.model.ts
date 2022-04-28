export class Message {
    title: string;
    message: string;

    private _isSent: boolean;
    set isSent(value: boolean) {
        this._isSent = value;
    }
    get isSent(): boolean {
        return this._isSent;
    }

    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this._isSent = false;
    }
}
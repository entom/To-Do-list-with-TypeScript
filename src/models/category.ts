export class Category {
    private _title: string;

    constructor(title: string) {
        this._title = title;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
}

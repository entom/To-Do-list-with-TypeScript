import {Category} from "./category";

export class ToDoItem {
    private _title: string;
    private _category: Category;

    constructor(title: string, category: Category) {
        this._title = title;
        this._category = category;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get category(): Category {
        return this._category;
    }

    set category(value: Category) {
        this._category = value;
    }
}

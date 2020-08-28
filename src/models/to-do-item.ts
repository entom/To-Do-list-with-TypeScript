import {Category} from "./category";
import {ToDoState} from "../types/to-do";

export class ToDoItem {
    private _title: string;
    private _category: Category;
    private readonly _createdAt: Date | null = null;
    private _state: ToDoState;

    constructor(title: string, category: Category) {
        this._title = title;
        this._category = category;
        this._createdAt = new Date();
        this._state = "opened";
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

    get createdAt(): Date | null {
        return this._createdAt;
    }

    get state(): ToDoState {
        return this._state;
    }

    set state(value: ToDoState) {
        this._state = value;
    }
}

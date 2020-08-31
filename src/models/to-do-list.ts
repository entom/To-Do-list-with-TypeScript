import {ToDoItem} from "./to-do-item";
import {Category} from "./category";

export class ToDoList {
    private _items: Array<ToDoItem> = [];

    addItem(item: ToDoItem) {
        this._items.push(item);
    }

    get items(): Array<ToDoItem> {
        return this._items;
    }

    getCounter(): number {
        return this._items.length;
    }

    findByCategory(category: Category): Array<ToDoItem> {
        return this._items.filter(item => item.category === category);
    }

    findOpened(): Array<ToDoItem> {
        return this._items.filter(item => item.state === 'opened');
    }

    clear() {
        this._items = [];
    }
}

import {ToDoItem} from "./to-do-item";

export class ToDoList {
    private items: Array<ToDoItem> = [];

    addItem(item: ToDoItem) {
        this.items.push(item);
    }

    getCounter(): number {
        return this.items.length;
    }
}

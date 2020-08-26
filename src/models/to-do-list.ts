import {ToDoItem} from "./to-do-item";
import {Category} from "./category";

export class ToDoList {
    private items: Array<ToDoItem> = [];

    addItem(item: ToDoItem) {
        this.items.push(item);
    }

    getCounter(): number {
        return this.items.length;
    }

    findByCategory(category: Category): Array<ToDoItem> {
        return this.items.filter(item => item.category === category);
    }
}

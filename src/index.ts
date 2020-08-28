import {Category} from './models/category';
import {ToDoList} from "./models/to-do-list";
import {ToDoItem} from "./models/to-do-item";

const categories: Array<Category> = [];

categories.push(new Category('Category 1'));
categories.push(new Category('Category 2'));
categories.push(new Category('Category 3'));
categories.push(new Category('Category 4'));
categories.push(new Category('Category 5'));

console.log('categories', categories);

const toDoList: ToDoList = new ToDoList();

toDoList.addItem(new ToDoItem("To Do 1", categories[0]));
toDoList.addItem(new ToDoItem("To Do 2", categories[1]));
toDoList.addItem(new ToDoItem("To Do 3", categories[1]));
toDoList.addItem(new ToDoItem("To Do 4", categories[1]));
toDoList.addItem(new ToDoItem("To Do 5", categories[2]));

console.log('to-do-items', toDoList.getCounter());

console.log(`items in category 1: ${toDoList.findByCategory(categories[0]).length}`)
console.log(`items in category 2: ${toDoList.findByCategory(categories[1]).length}`)
console.log(`items in category 3: ${toDoList.findByCategory(categories[2]).length}`)

toDoList.items.forEach(item => {
    console.log(`item date; ${item.createdAt}`)
});

console.log(`opened items: ${toDoList.findOpened().length}`);

toDoList.items[1].state = 'closed';
toDoList.items[2].state = 'closed';

console.log(`opened items: ${toDoList.findOpened().length}`);

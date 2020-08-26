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

console.log('to-do-items', toDoList.getCounter());

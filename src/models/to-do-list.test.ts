import {expect} from 'chai';
import {ToDoList} from "./to-do-list";
import {ToDoItem} from "./to-do-item";
import {Category} from "./category";

describe('To Do List', () => {

    const list = new ToDoList();

    it('should be able to create list', () => {
        expect(list).to.be.instanceOf(ToDoList);
    });

    const category1 = new Category("Category 1");
    const item1 = new ToDoItem("Item 1", category1);

    it('should be able to add item to list', () => {
        list.addItem(item1)
        expect(list.getCounter()).to.eq(1);
    });

    const item2 = new ToDoItem("Item 2", category1);

    it('should be able to add other item to list', () => {
        list.addItem(item2)
        expect(list.items).to.have.lengthOf(2);
    });

    it('should be able to find items by category', () => {
        expect(list.findByCategory(category1)).to.have.lengthOf(2);
    });

    it('should be empty after clear', () => {
        list.clear()
        expect(list.items).to.have.lengthOf(0);
    });

});

import {expect} from 'chai';
import {ToDoItem} from "./to-do-item";
import {Category} from "./category";

describe('To Do Item', () => {

    it('should be able to create item', () => {
        expect(new ToDoItem('Title 1', new Category('Category 1'))).to.be.instanceOf(ToDoItem);
    });

});

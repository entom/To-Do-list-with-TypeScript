import {expect} from 'chai';
import {ToDoItem} from "./to-do-item";
import {Category} from "./category";

describe('To Do Item', () => {

    const item = new ToDoItem('Title 1', new Category('Category 1'));

    it('should be able to create item', () => {
        expect(item).to.be.instanceOf(ToDoItem);
    });

    it('should have not null createdAt field', () => {
        expect(item.createdAt).to.not.be.null;
    });

    item.state = "closed";

    it('should have status closed', () => {
       expect(item.state).to.be.eq('closed');
    });

});

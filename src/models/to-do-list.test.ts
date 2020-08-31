import {expect} from 'chai';
import {ToDoList} from "./to-do-list";

describe('To Do List', () => {

    it('should be able to create list', () => {
        expect(new ToDoList()).to.be.instanceOf(ToDoList);
    });

});

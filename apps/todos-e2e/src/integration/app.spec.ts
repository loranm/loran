import { getAddTodoButton, getGreeting, getTodos } from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos list', () => {
    getTodos().should((todos) => expect(todos.length).equal(2));
    getAddTodoButton().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });
});

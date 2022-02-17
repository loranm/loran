import { Todo } from '@loran/api-interfaces';
import { Injectable } from '@nestjs/common';
import { TODOS } from './mocks/todos';

@Injectable()
export class AppService {
  getData(): Todo[] {
    return TODOS;
  }

  postTodo(todo: Todo): Todo {
    console.log(todo);
    TODOS.push(todo);
    return todo;
  }
}

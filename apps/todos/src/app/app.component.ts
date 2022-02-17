import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { FetchTodosService } from './webservices/fetch-todos/fetch-todos.service';

@Component({
  selector: 'loran-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'todos';
  todos$!: Observable<Todo[]>;

  constructor(private readonly todosService: FetchTodosService) {}
  ngOnInit(): void {
    this.todos$ = this.todosService.getTodos();
  }

  addTodo(): void {
    this.todosService.postTodo({ title: 'new todo' });
  }
}

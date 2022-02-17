import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { TODOS } from '../../mocks/todos';
import { Todo } from '../../models/todo';

@Injectable({
  providedIn: 'root',
})
export class FetchTodosService {
  private readonly endPoint = '/api/todos';
  constructor(private readonly http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    // return this.http.get<Todo[]>(this.endPoint);
    return timer(3000).pipe(map(() => TODOS));
  }

  postTodo(todo: Todo): Observable<Todo[]> {
    // return this.http.post<Todo>(this.endPoint, todo);
    return timer(1000).pipe(map(() => [...TODOS, todo]));
  }
}

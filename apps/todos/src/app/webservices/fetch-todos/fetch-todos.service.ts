import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '@loran/api-interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchTodosService {
  private readonly endPoint = '/api/todos';
  constructor(private readonly http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.endPoint)
      .pipe(tap((value) => console.log(value)));
  }

  postTodo(todo: Todo) {
    return this.http.post<Todo[]>('/api/addTodo', todo);
  }
}

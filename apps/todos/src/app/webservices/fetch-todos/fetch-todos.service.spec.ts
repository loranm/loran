import { TestBed } from '@angular/core/testing';

import { FetchTodosService } from './fetch-todos.service';

describe('FetchTodosService', () => {
  let service: FetchTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

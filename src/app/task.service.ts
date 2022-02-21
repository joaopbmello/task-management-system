import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Task } from './task';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class TaskService {

  private tasksUrl = 'api/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl).pipe(
      catchError(this.handleError<Task[]>('getTasks', []))
    );
  }

  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
    );
  }

  searchTasks(term: string): Observable<Task[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Task[]>(`${this.tasksUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Task[]>('searchTasks', []))
    );
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions).pipe(
      catchError(this.handleError<Task>('addTask'))
    );
  }

  deleteTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<Task>(url, this.httpOptions).pipe(
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put(this.tasksUrl, task, this.httpOptions).pipe(
      catchError(this.handleError<any>('updatedTask'))
    );
  }

  concludeTask(status: string): Observable<any> {
    return this.http.put(this.tasksUrl, status, this.httpOptions).pipe(
      catchError(this.handleError<any>('concludedTask'))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }
}
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, title: 'Tarefa 1', description: 'Primeira tarefa', responsable: 'João', priority: 'Alta', deadline: '2022-02-20', status: 'Em andamento'},
      { id: 2, title: 'Tarefa 2', description: 'Segunda tarefa', responsable: 'Antônio', priority: 'Média', deadline: '2022-02-20', status: 'Em andamento'},
      { id: 3, title: 'Tarefa 3', description: 'Terceira tarefa', responsable: 'João', priority: 'Baixa', deadline: '2022-02-20', status: 'Em andamento'}
    ];
    return {tasks};
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }
}
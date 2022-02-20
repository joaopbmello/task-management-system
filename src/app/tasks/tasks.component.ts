import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  filter = "Em andamento";

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
  }

  delete(task: Task): void {
    if (window.confirm("Deseja realmente excluir a tarefa?")) {
      this.tasks = this.tasks.filter(t => t !== task);
      this.taskService.deleteTask(task.id).subscribe();
    }
  }

  conclude(task: Task): void {
    task.status = 'Concluído';
    this.taskService.updateTask(task).subscribe();
  }

  alreadyConcluded(): void {
    window.alert('Tarefa já concluída');
  }
}
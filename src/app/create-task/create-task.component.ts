import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  tasks: Task[] = [];

  priorities = ['Alta', 'Média', 'Baixa'];
  statuses = ['Em andamento', 'Concluído'];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  add(title: string, description: string, responsable: string, priority: string, deadline: string, status: string): void {
    title = title.trim();
    if (!title) { return; }
    this.taskService.addTask({ title, description, responsable, priority, deadline, status } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
    window.alert('Tarefa criada!')
  } 
}
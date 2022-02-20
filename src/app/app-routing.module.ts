import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/tarefas', pathMatch: 'full' },
  { path: 'detalhe/:id', component: TaskDetailComponent},
  { path: 'cadastro', component: CreateTaskComponent},
  { path: 'tarefas', component: TasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
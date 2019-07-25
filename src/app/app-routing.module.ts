import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './component/todo/todo.component';
import { LoadComponent } from './component/load/load.component';


const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: '',
    component: LoadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

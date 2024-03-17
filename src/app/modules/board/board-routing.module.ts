import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardMainComponent } from './board-main/board-main.component';

const routes: Routes = [
  {
    path: '',
    component: BoardMainComponent,
    title: 'Board'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }

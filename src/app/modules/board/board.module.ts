import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardKanbanComponent } from './components/board-kanban/board-kanban.component';
import { BoardMainComponent } from './board-main/board-main.component';


@NgModule({
  declarations: [
    BoardKanbanComponent,
    BoardMainComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }

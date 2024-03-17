import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';

/// Components
import { BoardRoutingModule } from './board-routing.module';
import { BoardKanbanComponent } from './components/board-kanban/board-kanban.component';
import { BoardMainComponent } from './board-main/board-main.component';

const MATERIAL_MODULES = [
  MatCardModule
]

@NgModule({
  declarations: [
    BoardKanbanComponent,
    BoardMainComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MATERIAL_MODULES,
    DragDropModule
  ]
})
export class BoardModule { }

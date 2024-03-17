import { Component, Input, OnInit } from '@angular/core';
import { Board, TaskItem } from '../../interfaces/kanban.interface';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board-kanban',
  templateUrl: './board-kanban.component.html',
  styleUrls: ['./board-kanban.component.scss']
})
export class BoardKanbanComponent implements OnInit {
  
  @Input()
  public board!: Board;


  ngOnInit(): void {
      
  }


  drop(dropEvent: CdkDragDrop<TaskItem[]>) {
    if(dropEvent.previousContainer === dropEvent.container) {
      moveItemInArray(
        dropEvent.container.data,
        dropEvent.previousIndex,
        dropEvent.currentIndex
      );
    }
    else{
      transferArrayItem(
        dropEvent.previousContainer.data,
        dropEvent.container.data,
        dropEvent.previousIndex,
        dropEvent.currentIndex
      );
    }
  }
}

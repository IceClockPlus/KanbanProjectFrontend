import { Component, OnInit } from '@angular/core';
import { Board } from '../interfaces/kanban.interface';

@Component({
  selector: 'app-board-main',
  templateUrl: './board-main.component.html',
  styleUrls: ['./board-main.component.scss']
})
export class BoardMainComponent implements OnInit {

  public board: Board | null = null;
  constructor(){
    this.board = {
      id: 'sprint1',
      name: 'Sprint 1',
      stages: [
        {
          name: 'To Do',
          stageNumber: 1,
          tasks: [
            {
              code: 'TKS-42',
              name: 'Nombre de tarea',
              points: null
            }
          ]
        },
        {
          name: 'In Progress',
          stageNumber: 2,
          tasks: [
            {
              code: 'TKS-34',
              name: 'Tarea 2 con mayor detalle',
              points: 11
            }
          ]
        },
        {
          name: 'Done',
          stageNumber: 3,
          tasks: [
            {
              code: 'TKS-14',
              name: 'Tarea 3 con mayor detalle',
              points: 3

            }
          ]
        }
      ]
    };
  }

  ngOnInit(): void {
      
  }



}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardKanbanComponent } from './board-kanban.component';

describe('BoardKanbanComponent', () => {
  let component: BoardKanbanComponent;
  let fixture: ComponentFixture<BoardKanbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardKanbanComponent]
    });
    fixture = TestBed.createComponent(BoardKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

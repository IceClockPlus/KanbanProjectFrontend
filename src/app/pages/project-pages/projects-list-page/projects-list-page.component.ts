import { Component, OnInit } from '@angular/core';
import { IProject } from '@app/data/intefaces/project';
import { ProjectsState } from '@app/features/project/state';
import { loadProjects, loadProjectsSuccess } from '@app/features/project/state/actions/project.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects-list-page',
  templateUrl: './projects-list-page.component.html',
  styleUrls: ['./projects-list-page.component.scss']
})
export class ProjectsListPageComponent implements OnInit {
  projects$: Observable<IProject[]>;
  constructor(private store: Store<ProjectsState>) {
    this.projects$ = new Observable<IProject[]>();
  }

  ngOnInit(): void {
    this.store.dispatch(loadProjects());
  }

}

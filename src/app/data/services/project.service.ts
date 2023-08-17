import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProject } from '@data/intefaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  private mockProjects: IProject[] = [
    {
      id: 'PD-1',
      name: 'Project  1',
      description: 'Description 1'
    },
    {
      id: 'PD-2',
      name: 'Project  2',
      description: 'Description 2'
    },
    {
      id: 'PD-3',
      name: 'Project  3',
      description: 'Description 3'
    },
  ];

  public getMyProjects(): Observable<IProject[]> {
    return of(this.mockProjects);
  }
}

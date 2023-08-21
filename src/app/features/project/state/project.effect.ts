import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProjectService } from "@app/data/services/project.service";
import { ProjectActions } from ".";
import { mergeMap, of, pipe, map, catchError } from "rxjs";
import { IProject } from "@app/data/intefaces/project";

@Injectable()
export class ProjectEffects {
    
    projects$ = createEffect(() => this.actions$.pipe(
        ofType(ProjectActions.loadProjects),
        mergeMap(() => 
            this._projectService.getMyProjects().pipe(
                map(
                    (projects: IProject[]) => 
                    ProjectActions.loadProjectsSuccess({payload: projects})
                )
            )
        ),
        catchError((error) => of(ProjectActions.loadProjectsFailure({error})))
    ));

    constructor(private actions$: Actions, private _projectService: ProjectService) {}
}
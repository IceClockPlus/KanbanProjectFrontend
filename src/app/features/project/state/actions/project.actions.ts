import { IProject } from "@app/data/intefaces/project";
import { createAction, props } from "@ngrx/store";

export const loadProjects = createAction('[Projects Page] Load Projects');

export const loadProjectsFailure = createAction('[Load API] Load Projects Fail',
    props<{error: any}>()
);

export const loadProjectsSuccess = createAction('[Load API] Get Projects', 
    props<{payload: IProject[]}>()
);


import { IProject } from "@app/data/intefaces/project";
import { createAction, props } from "@ngrx/store";

export const getUserProjects = createAction('[Load API] Get Projects', 
    props<{projects: IProject[]}>()
);
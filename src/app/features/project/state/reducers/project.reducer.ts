import { createReducer, on } from "@ngrx/store";
import { getUserProjects } from '../actions/project.actions'
import { IProject } from "@app/data/intefaces/project";

export interface State {
    projects: IProject[];
};

const initialState: State = {
    projects: []
};

export const reducer = createReducer<State>(initialState, 
 on(getUserProjects, (state, action) => {
    return {
        ...state,
        projects: action.projects
    }
 }),     
)
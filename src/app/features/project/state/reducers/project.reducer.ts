import { Action, createReducer, on } from "@ngrx/store";
import { getUserProjects } from '../actions/project.actions'
import { IProject } from "@app/data/intefaces/project";

export interface State {
    projects: IProject[];
};

export const projectFeatureKey = 'project';
const initialState: State = {
    projects: []
};

export const projectReducer = createReducer<State>(initialState, 
 on(getUserProjects, (state, action) => {
    return {
        ...state,
        projects: action.projects
    }
 }),     
);

export function reducer(state: State | undefined, action: Action) {
    return projectReducer(state, action);
}
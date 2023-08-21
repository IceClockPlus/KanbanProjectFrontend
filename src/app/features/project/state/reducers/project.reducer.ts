import { Action, createReducer, on } from "@ngrx/store";
import { loadProjects, loadProjectsFailure, loadProjectsSuccess } from '../actions/project.actions'
import { IProject } from "@app/data/intefaces/project";

export interface ProjectsState {
    projects: IProject[];
    error: string | null;
    loading: boolean;
};

export const projectFeatureKey = 'project';
const initialState: ProjectsState = {
    projects: [],
    error: null,
    loading: false
};

export const projectReducer = createReducer<ProjectsState>(initialState, 
 on(loadProjects, (state) => ({
    ...state,
    loading: false,
    error: null
 })),
 on(loadProjectsSuccess, (state, action) => {
    return {
        ...state,
        projects: action.payload
    }
 }),
 on(loadProjectsFailure, (state, {error}) => ({
    ...state,
    error
 }))
);

export function reducer(state: ProjectsState | undefined, action: Action) {
    return projectReducer(state, action);
}
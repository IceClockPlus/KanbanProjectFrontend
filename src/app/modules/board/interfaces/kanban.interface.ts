export interface TaskItem {
    code: string;
    name: string;
    points: number | null;
}

export interface Board {
    id: string;
    name: string;
    stages: Array<BoardStage>;
}

export interface BoardStage{
    name: string;
    stageNumber: number;
    tasks: Array<TaskItem>;
}
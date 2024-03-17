export interface TaskItem {
    code: string;
    name: string;
    description: string;
    points: number | null;
}

export interface BoardDetail {
    id: string;
    name: string;
    stages: Array<BoardStage>;
}

export interface BoardStage{
    name: string;
    stageNumber: number;
    tasks: Array<TaskItem>;
}
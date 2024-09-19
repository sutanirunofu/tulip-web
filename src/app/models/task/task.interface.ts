export interface ITaskProps {
    name: string;
    description: string;
    type: TaskTypeEnum;
    importance: TaskImportanceEnum;
}

export interface ITaskResponse extends ITaskProps {
    _id: string;
    publishDate: number;
    __v: number;
}

export enum TaskTypeEnum {
    NOTICE = 0,
    EVENT = 1,
    HABIT = 2,
}

export enum TaskImportanceEnum {
    TOTAL_NOT_IMPORTANT = 0,
    NOT_IMPORTANT = 1,
    IMPORTANT = 2,
    TOTAL_IMPORTANT = 3,
}

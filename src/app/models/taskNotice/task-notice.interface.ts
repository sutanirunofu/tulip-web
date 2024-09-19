import { ITaskProps } from "models/task/task.interface";

export interface ITaskNoticeProps extends ITaskProps {
    date: Date;
}
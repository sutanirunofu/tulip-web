import { ITaskProps } from "models/task/task.interface";

export interface ITaskEventProps extends ITaskProps {
    deadline: Date;
    time: number; // Hours
}

import { ITaskProps } from "models/task/task.interface";

export interface ITaskHabitProps extends ITaskProps {
    startDate: Date;
    gap: number; // Hours
    time: number; // Hours
}
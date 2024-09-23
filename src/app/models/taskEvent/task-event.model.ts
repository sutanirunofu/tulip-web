import { TaskTypeEnum } from "models/task/task.interface";
import { Task } from "models/task/task.model";
import { ITaskEventProps } from "./task-event.interface";

export class TaskEvent extends Task {
    override type = TaskTypeEnum.EVENT;
    private deadline: Date;
    private time: number;

    constructor(props: ITaskEventProps) {
        super(props);
        this.deadline = props.deadline;
        this.time = props.time;
    }

    // Getters

    getDeadline(): Date {
        return this.deadline;
    }

    getTime(): number {
        return this.time;
    }

    // Setters

    setDeadline(value: Date): void {
        this.deadline = value;
    }

    setTime(value: number): void {
        this.time = value;
    }
}

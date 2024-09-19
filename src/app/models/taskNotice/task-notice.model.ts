import { TaskTypeEnum } from "models/task/task.interface";
import { Task } from "models/task/task.model";
import { ITaskNoticeProps } from "./task-notice.interface";


export class TaskNotice extends Task {
    override type = TaskTypeEnum.NOTICE;
    private date: Date;

    constructor(props: ITaskNoticeProps) {
        super(props);

        this.date = props.date;
    }

    // Getters

    getDate(): Date {
        return this.date;
    }

    // Setters

    setDate(value: Date): void {
        this.date = value;
    }
}
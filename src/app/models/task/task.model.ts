import { ITaskProps, TaskImportanceEnum, TaskTypeEnum } from "./task.interface";

export class Task {
    private name: string;
    private description: string;
    protected type: TaskTypeEnum;
    private importance: TaskImportanceEnum;

    constructor(props: ITaskProps) {
        this.name = props.name;
        this.description = props.description;
        this.type = props.type;
        this.importance = props.importance;
    }

    // Getters

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getType(): TaskTypeEnum {
        return this.type;
    }

    getImportance(): TaskImportanceEnum {
        return this.importance;
    }

    // Setters

    setName(value: string): void {
        this.name = value;
    }

    setDescription(value: string): void {
        this.description = value;
    }

    setType(value: TaskTypeEnum): void {
        this.type = value;
    }

    setImportance(value: TaskImportanceEnum): void {
        this.importance = value;
    }
}
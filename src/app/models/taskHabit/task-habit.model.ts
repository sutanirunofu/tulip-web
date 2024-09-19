import { TaskTypeEnum } from "models/task/task.interface";
import { Task } from "models/task/task.model";
import { ITaskHabitProps } from "./task-habit.interface";
import { TaskRepository } from "repositories/task.repository";

export class TaskHabit extends Task {
  override type = TaskTypeEnum.HABIT;
  private startDate: Date;
  private gap: number;
  private time: number;

  constructor(
    props: ITaskHabitProps,
    private readonly taskRepository: TaskRepository
  ) {
    super(props);

    this.startDate = props.startDate;
    this.gap = props.gap;
    this.time = props.time;
  }

  // Getters

  getStartDate(): Date {
    return this.startDate;
  }

  getGap(): number {
    return this.gap;
  }

  getTime(): number {
    return this.time;
  }

  // Setters

  setStartDate(value: Date): void {
    this.startDate = value;
  }

  setGap(value: number): void {
    this.gap = value;
  }

  setTime(value: number): void {
    this.time = value;
  }

  // ---

  save(): void {
    this.taskRepository;
  }
}

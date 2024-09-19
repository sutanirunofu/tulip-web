import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { LoggerService } from "../services/logger.service";
import { Task } from "models/task/task.model";
import { ITaskResponse } from "models/task/task.interface";

@Injectable({
  providedIn: "root",
})
export class TaskRepository {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly loggerService: LoggerService
  ) {}

  
  getAll(): Observable<ITaskResponse[]> {
    return this.httpClient.get<ITaskResponse[]>("/api/task");
  }

  getOne(id: string): Observable<ITaskResponse> {
    return this.httpClient.get<ITaskResponse>(`/api/task/${id}`);
  }

  create<T extends Task>(task: T): Observable<ITaskResponse> {
    return this.httpClient.post<ITaskResponse>("/api/task", task);
  }

  edit<T>(id: string, task: T): Observable<ITaskResponse> {
    return this.httpClient.patch<ITaskResponse>(`/api/task/${id}`, task);
  }
  
  delete(id: string): Observable<ITaskResponse> {
    return this.httpClient.delete<ITaskResponse>(`/api/task/${id}`);
  }
}

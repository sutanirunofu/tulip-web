import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly loggerService: LoggerService
  ) {}

  get<T>(url: string, options: Record<string, unknown>): Observable<T> {
    return this.httpClient.get<T>(url, options).pipe(
      map((response: T) => {
        this.loggerService.log(
          `[Http Service] Get '${url}' Response '${response}'`
        );
        return response;
      }),
      catchError((error) => {
        this.loggerService.error(
          `[Http Service] Get '${url}' Error '${error}'`
        );
        return EMPTY;
      })
    );
  }

  post<T>(
    url: string,
    data: unknown,
    options: Record<string, unknown>
  ): Observable<T> {
    return this.httpClient.post<T>(url, data, options).pipe(
      map((response: T) => {
        this.loggerService.log(
          `[Http Service] Post '${url}' Response '${response}'`
        );
        return response;
      }),
      catchError((error) => {
        this.loggerService.error(
          `[Http Service] Post '${url}' Error '${error}'`
        );
        return EMPTY;
      })
    );
  }

  put<T>(
    url: string,
    data: unknown,
    options: Record<string, unknown>
  ): Observable<T> {
    return this.httpClient.put<T>(url, data, options).pipe(
      map((response: T) => {
        this.loggerService.log(
          `[Http Service] Put '${url}' Response '${response}'`
        );
        return response;
      }),
      catchError((error) => {
        this.loggerService.error(
          `[Http Service] Put '${url}' Error '${error}'`
        );
        return EMPTY;
      })
    );
  }

  patch<T>(
    url: string,
    data: unknown,
    options: Record<string, unknown>
  ): Observable<T> {
    return this.httpClient.patch<T>(url, data, options).pipe(
      map((response: T) => {
        this.loggerService.log(
          `[Http Service] Patch '${url}' Response '${response}'`
        );
        return response;
      }),
      catchError((error) => {
        this.loggerService.error(
          `[Http Service] Patch '${url}' Error '${error}'`
        );
        return EMPTY;
      })
    );
  }

  delete<T>(url: string, options: Record<string, unknown>): Observable<T> {
    return this.httpClient.delete<T>(url, options).pipe(
      map((response: T) => {
        this.loggerService.log(
          `[Http Service] Delete '${url}' Response '${response}'`
        );
        return response;
      }),
      catchError((error) => {
        this.loggerService.error(
          `[Http Service] Delete '${url}' Error '${error}'`
        );
        return EMPTY;
      })
    );
  }
}

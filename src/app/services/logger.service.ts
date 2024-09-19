import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class LoggerService {
    constructor() {}

    log(...message: unknown[]) {
        console.log(message);
    }

    error(...message: unknown[]) {
        console.error(message);
    }

    warn(...message: unknown[]) {
        console.warn(message);
    }

    debug(...message: unknown[]) {
        console.debug(message);
    }
}

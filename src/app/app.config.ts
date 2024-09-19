import { ApplicationConfig, provideZoneChangeDetection, isDevMode, LOCALE_ID, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideHttpClient } from "@angular/common/http";
import * as storeRef from "./store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StyleClassModule } from "primeng/styleclass";

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom([BrowserModule, BrowserAnimationsModule, StyleClassModule]),
        provideHttpClient(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(),
        provideStore(storeRef.reducers, {
            metaReducers: storeRef.metaReducers,
        }),
        provideEffects(),
        provideStoreDevtools({ maxAge: 100, logOnly: !isDevMode() }),
        { provide: LOCALE_ID, useValue: "ru" },
    ],
};

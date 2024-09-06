import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { sidebarNode, sidebarReducer } from "./sidebar/sidebar.reducer";
import { ISidebarState } from "./sidebar/sidebar.interface";

export interface IState {
    [sidebarNode]: ISidebarState;
}

export const reducers: ActionReducerMap<IState> = {
    [sidebarNode]: sidebarReducer,
};

export const metaReducers: MetaReducer<IState>[] = !isDevMode() ? [] : [];

export const effects = [];

import { createReducer, on } from "@ngrx/store";
import { ISidebarState } from "./sidebar.interface";
import * as SidebarActions from "./sidebar.actions";

export const sidebarNode = "SIDEBAR";

export const initialState: ISidebarState = {
    isVisible: false,
}

export const sidebarReducer = createReducer(
    initialState,
    on(SidebarActions.toggleSidebarVisibility, (state, { isVisible }) => ({ ...state, isVisible }))
)
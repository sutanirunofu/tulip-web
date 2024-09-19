import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ISidebarState } from "./sidebar.interface";
import { sidebarNode } from "./sidebar.reducer";

const sidebarFeature = createFeatureSelector<ISidebarState>(sidebarNode);

export const selectSidebarIsVisible = createSelector(sidebarFeature, (state: ISidebarState): boolean => state.isVisible);

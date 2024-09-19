import { createAction, props } from "@ngrx/store";
import { SidebarActionsEnum } from "./sidebar.interface";

export const toggleSidebarVisibility = createAction(SidebarActionsEnum.toggle, props<{ isVisible: boolean }>());

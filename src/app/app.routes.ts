import { Routes } from "@angular/router";
import { CalendarComponent } from "pages/calendar/calendar.component";
import { NewTaskComponent } from "pages/new-task/new-task.component";
import { ProfileComponent } from "pages/profile/profile.component";
import { TaskComponent } from "pages/task/task.component";

export const routes: Routes = [
    { path: "", redirectTo: "calendar", pathMatch: "full" },
    { path: "calendar", component: CalendarComponent },
    { path: "task", component: TaskComponent },
    { path: "new-task", component: NewTaskComponent },
    { path: "profile", component: ProfileComponent },
    { path: "**", redirectTo: "calendar", pathMatch: "full" },
];

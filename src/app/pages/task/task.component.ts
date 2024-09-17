import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { toggleSidebarVisibility } from "store/sidebar/sidebar.actions";
import { TopbarComponent } from "../../components/topbar/topbar.component";

@Component({
    selector: "app-task",
    standalone: true,
    imports: [TopbarComponent],
    templateUrl: "./task.component.html",
    styleUrl: "./task.component.scss",
})
export class TaskComponent {
    constructor(private readonly store: Store) {}

    openCallback(): void {
        this.store.dispatch(toggleSidebarVisibility({ isVisible: true }));
    }
}

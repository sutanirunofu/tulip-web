import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { toggleSidebarVisibility } from "store/sidebar/sidebar.actions";
import { TopbarComponent } from "../../components/topbar/topbar.component";

@Component({
    selector: "app-profile",
    standalone: true,
    imports: [TopbarComponent],
    templateUrl: "./profile.component.html",
    styleUrl: "./profile.component.scss",
})
export class ProfileComponent {
    constructor(private readonly store: Store) {}

    openCallback(): void {
        this.store.dispatch(toggleSidebarVisibility({ isVisible: true }));
    }
}

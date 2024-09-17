import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { toggleSidebarVisibility } from "store/sidebar/sidebar.actions";
import { PlusButtonComponent } from "../../components/plus-button/plus-button.component";
import { Router } from "@angular/router";
import { TopbarComponent } from "../../components/topbar/topbar.component";

@Component({
    selector: "app-calendar",
    standalone: true,
    imports: [PlusButtonComponent, TopbarComponent],
    templateUrl: "./calendar.component.html",
    styleUrl: "./calendar.component.scss",
})
export class CalendarComponent {
    constructor(
        private readonly store: Store,
        private readonly router: Router
    ) {}

    openCallback(): void {
        this.store.dispatch(toggleSidebarVisibility({ isVisible: true }));
    }

    navigateToCallback(path: string): void {
        this.router.navigate([path]);
    }
}

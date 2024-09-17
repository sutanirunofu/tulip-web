import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MenuButtonComponent } from "../menu-button/menu-button.component";
import { Store } from "@ngrx/store";
import { toggleSidebarVisibility } from "store/sidebar/sidebar.actions";
import { EditButtonComponent } from "../edit-button/edit-button.component";

@Component({
    selector: "app-topbar",
    standalone: true,
    imports: [MenuButtonComponent, EditButtonComponent],
    templateUrl: "./topbar.component.html",
    styleUrl: "./topbar.component.scss",
})
export class TopbarComponent {
    @Input() title: string = "Default page";
    @Input() hasEditButton: boolean = false;

    @Output() edit = new EventEmitter();

    constructor(private readonly store: Store) {}

    openCallback(): void {
        this.store.dispatch(toggleSidebarVisibility({ isVisible: true }));
    }
}

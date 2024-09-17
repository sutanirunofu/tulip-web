import { Component, EventEmitter, Output } from "@angular/core";
import { Button } from "primeng/button";

@Component({
    selector: "app-menu-button",
    standalone: true,
    imports: [Button],
    templateUrl: "./menu-button.component.html",
    styleUrl: "./menu-button.component.scss",
})
export class MenuButtonComponent {
    @Output() click = new EventEmitter();
}

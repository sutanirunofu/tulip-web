import { Component, EventEmitter, Output } from "@angular/core";
import { Button } from "primeng/button";

@Component({
    selector: "app-close-button",
    standalone: true,
    imports: [Button],
    templateUrl: "./close-button.component.html",
    styleUrl: "./close-button.component.scss",
})
export class CloseButtonComponent {
    @Output() click = new EventEmitter();
}

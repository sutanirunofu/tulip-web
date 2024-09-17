import { Component, EventEmitter, Output } from "@angular/core";
import { Button } from "primeng/button";

@Component({
    selector: "app-back-button",
    standalone: true,
    imports: [Button],
    templateUrl: "./back-button.component.html",
    styleUrl: "./back-button.component.scss",
})
export class BackButtonComponent {
    @Output() click = new EventEmitter();
}

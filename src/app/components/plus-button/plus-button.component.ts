import { Component, EventEmitter, Output } from "@angular/core";
import { Button } from "primeng/button";

@Component({
    selector: "app-plus-button",
    standalone: true,
    imports: [Button],
    templateUrl: "./plus-button.component.html",
    styleUrl: "./plus-button.component.scss",
})
export class PlusButtonComponent {
    @Output() click = new EventEmitter();
}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { toggleSidebarVisibility } from "store/sidebar/sidebar.actions";
import { PlusButtonComponent } from "../../components/plus-button/plus-button.component";
import { Router } from "@angular/router";
import { TopbarComponent } from "../../components/topbar/topbar.component";
import { CommonModule, NgStyle } from "@angular/common";

interface Task {
    name: string;
    from: number;
    to: number;
    styles: {
        top: string;
        height: string;
    };
}

@Component({
    selector: "app-calendar",
    standalone: true,
    imports: [PlusButtonComponent, TopbarComponent, CommonModule, NgStyle],
    templateUrl: "./calendar.component.html",
    styleUrl: "./calendar.component.scss",
})
export class CalendarComponent implements OnInit, AfterViewInit {
    @ViewChild("calendarScrollArea") calendarScrollArea!: ElementRef<HTMLDivElement>;

    asideItems: Date[] = [];
    tasks: Task[] = [
        {
            name: "Сделать ТРПО",
            from: Date.now(),
            to: Date.now() + 1000 * 60 * 60 * 3,
            styles: {
                top: `${60 * (new Date().getHours() - 2) + new Date().getMinutes()}px`,
                height: `${((80 * (Date.now() + 1000 * 60 * 60 * 4 - Date.now())) / 1000 / 60 / 60).toFixed(3)}px`,
            },
        },
        {
            name: "Сделать ТРПО",
            from: Date.now(),
            to: Date.now() + 1000 * 60 * 60 * 3,
            styles: {
                top: `${60 * new Date().getHours() + new Date().getMinutes()}px`,
                height: `${((80 * (Date.now() + 1000 * 60 * 60 * 3 - Date.now())) / 1000 / 60 / 60).toFixed(3)}px`,
            },
        },
    ];

    constructor(
        private readonly store: Store,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        let date = new Date(Date.now());
        date.setHours(0, 0, 0, 0);

        for (let i = 0; i <= 24; i++) {
            this.asideItems.push(date);
            date = new Date(date.setHours(i));
        }
    }

    ngAfterViewInit(): void {
        const date = new Date();
        this.calendarScrollArea.nativeElement.scrollTop += (60 * date.getHours()) / 2;
    }

    openCallback(): void {
        this.store.dispatch(toggleSidebarVisibility({ isVisible: true }));
    }

    navigateToCallback(path: string): void {
        this.router.navigate([path]);
    }
}

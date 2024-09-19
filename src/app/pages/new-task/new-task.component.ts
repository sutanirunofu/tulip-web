import { Component, OnInit } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { StepperModule } from "primeng/stepper";
import { InputTextModule } from "primeng/inputtext";
import { ToggleButtonModule } from "primeng/togglebutton";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { CommonModule, Location, NgStyle } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { BackButtonComponent } from "../../components/back-button/back-button.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { TaskImportanceEnum, TaskTypeEnum } from "models/task/task.interface";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputTextareaModule } from "primeng/inputtextarea";
import { first, map, Observable } from "rxjs";
import { CalendarModule } from "primeng/calendar";
import { InputNumberModule } from "primeng/inputnumber";

@Component({
    selector: "app-new-task",
    standalone: true,
    imports: [
        StepperModule,
        ButtonModule,
        InputTextModule,
        ToggleButtonModule,
        IconFieldModule,
        InputIconModule,
        CommonModule,
        FormsModule,
        BackButtonComponent,
        ReactiveFormsModule,
        FloatLabelModule,
        NgStyle,
        InputTextareaModule,
        CalendarModule,
        InputNumberModule,
    ],
    templateUrl: "./new-task.component.html",
    styleUrl: "./new-task.component.scss",
})
export class NewTaskComponent implements OnInit {
    taskType: typeof TaskTypeEnum = TaskTypeEnum;
    active = new FormControl<number>(0);
    minDate = new Date();

    form = new FormGroup({
        name: new FormControl<string>("", {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(1), Validators.maxLength(50)],
        }),
        description: new FormControl<string>("", {
            nonNullable: true,
            validators: [Validators.maxLength(1000)],
        }),
        type: new FormControl<TaskTypeEnum>(TaskTypeEnum.NOTICE, {
            nonNullable: true,
            validators: [Validators.required],
        }),
        importance: new FormControl<TaskImportanceEnum>(TaskImportanceEnum.TOTAL_NOT_IMPORTANT, { nonNullable: true, validators: [Validators.required] }),
        deadline: new FormControl<Date>(new Date(), {
            nonNullable: true,
            validators: [Validators.required],
        }),
        time: new FormControl<number>(1, {
            nonNullable: true,
            validators: [Validators.required, Validators.min(0)],
        }),
    });

    constructor(
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly location: Location
    ) {}

    ngOnInit(): void {
        this.route.fragment.pipe(first()).subscribe((fragment) => {
            if (this.form.controls.name.valid) {
                this.active.setValue(Number(fragment));
            }
        });

        this.active.valueChanges.subscribe(() => {
            const path: string = this.location.path();
            this.router.navigate([path], {
                fragment: this.active.value?.toString(),
            });
        });
    }

    navigateToCallback(path: string): void {
        this.router.navigate([path]);
    }

    setTaskType(state: number): void {
        if (state === -1) return;
        this.form.controls.type.setValue(state);
    }

    setTaskImportance(value: number): void {
        if (value === -1) return;
        this.form.controls.importance.setValue(value);
    }

    setTaskDateToday(): void {
        this.form.controls.deadline.setValue(new Date());
    }

    setTaskDateTomorrow(): void {
        const today = new Date();
        today.setDate(Date.now() + this.getDayInUTCMilliseconds());
        this.form.controls.deadline.setValue(today);
    }

    setTaskDateWeek(): void {
        const today = new Date();
        today.setDate(Date.now() + this.getDayInUTCMilliseconds() * 7);
        this.form.controls.deadline.setValue(today);
    }

    setTaskDateMonth(): void {
        const today = new Date();
        today.setDate(Date.now() + this.getDayInUTCMilliseconds() * 30);
        this.form.controls.deadline.setValue(today);
    }

    get daysToFormDate$(): Observable<number> {
        return this.form.controls.deadline.valueChanges.pipe(
            map((date) => {
                return new Date(date).getDay() - new Date().getDay();
            })
        );
    }

    createTaskCallback(): void {}

    private getDayInUTCMilliseconds(): number {
        return 1000 * 60 * 60 * 24;
    }
}

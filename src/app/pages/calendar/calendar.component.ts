import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { toggleSidebarVisibility } from 'store/sidebar/sidebar.actions';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  constructor(private readonly store: Store) {}

  openCallback(): void {
    this.store.dispatch(toggleSidebarVisibility({ isVisible: true }));
  }
}

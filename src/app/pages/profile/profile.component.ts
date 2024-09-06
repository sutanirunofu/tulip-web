import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { toggleSidebarVisibility } from 'store/sidebar/sidebar.actions';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private readonly store: Store) {}

  openCallback(): void {
    this.store.dispatch(toggleSidebarVisibility({ isVisible: true }));
  }
}

import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { select, Store } from '@ngrx/store';
import { selectSidebarIsVisible } from 'store/sidebar';
import { toggleSidebarVisibility } from 'store/sidebar/sidebar.actions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, StyleClassModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  sidebarVisible: boolean = false;  

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.pipe(select(selectSidebarIsVisible)).subscribe(state => {
      this.sidebarVisible = state;
    })
  }

  closeCallback(): void {
    this.store.dispatch(toggleSidebarVisibility({ isVisible: false }));
  }

  logoutCallback(): void {
    
  }
}

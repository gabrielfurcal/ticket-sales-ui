import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-menu',
  imports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() sidenav!: MatSidenav; // Receive reference from AppComponent

  toggleSidenav() {
    this.sidenav?.toggle();
  }
}

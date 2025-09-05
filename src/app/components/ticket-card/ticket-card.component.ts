import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-ticket-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketCardComponent {
  @Input() scheduleId: number | undefined;

}

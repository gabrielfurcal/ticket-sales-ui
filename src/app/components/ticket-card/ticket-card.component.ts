import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { TimeDiffPipe } from '../../../pipes/TimeDiffPipe';

@Component({
  selector: 'app-ticket-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, UpperCasePipe, CurrencyPipe, TimeDiffPipe],
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketCardComponent {
  @Input() schedule: any | undefined;

}

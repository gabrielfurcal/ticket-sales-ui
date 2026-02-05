import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RoundtripFormComponent } from '../../components/roundtrip-form/roundtrip-form.component';

@Component({
  selector: 'app-home',
  imports: [MatTabsModule, RoundtripFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
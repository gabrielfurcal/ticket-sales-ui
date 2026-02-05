import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { Apollo } from 'apollo-angular';

import { GetStationsGQL } from '../../../graphql/admin-inputs/schema';
import { GetSchedulesGQL } from '../../../graphql/train-company/schema';
import { TicketCardComponent } from "../ticket-card/ticket-card.component";
import { RoundtripFormValue } from './roundtrip-form.types';

@Component({
  selector: 'app-roundtrip-form',
  imports: [MatTabsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatButtonModule, TicketCardComponent],
  templateUrl: './roundtrip-form.component.html',
  styleUrl: './roundtrip-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoundtripFormComponent implements OnInit {
  constructor(private apollo: Apollo, private fb: FormBuilder, private getStationsGQL: GetStationsGQL, private getSchedulesGQL: GetSchedulesGQL) { }

  stations = signal<any[]>([]);
  schedules = signal<any[]>([]);
  fromInfo = signal<any>({});
  toInfo = signal<any>({});

  roundtripForm!: FormGroup<RoundtripFormValue>;

  ngOnInit(): void {
    this.roundtripForm = this.fb.group<RoundtripFormValue>({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: ['',  Validators.required],
      passengers: [1, Validators.required]
    });

    this.getStationsGQL.watch().valueChanges.subscribe((data: any) => {
      this.stations.set(data?.data?.stations);
    });
  }

  submit() {
    const formData: Partial<RoundtripFormValue> = this.roundtripForm.value!;
    this.fromInfo.set(this.stations().find(station => station.id === formData.origin));
    this.toInfo.set(this.stations().find(station => station.id === formData.destination));

    // Format dates to YYYY-MM-DD 00:00:00 if no time is specified
    const startDate = formData.departureDate ? `${new Date(formData.departureDate).toISOString().split('T')[0]} 00:00:00` : '';
    const endDate = formData.returnDate ? `${new Date(formData.returnDate).toISOString().split('T')[0]} 00:00:00` : '';

    this.getSchedulesGQL.watch({
      startStationId: +formData.origin,
      endStationId: +formData.destination,
      startDate: startDate,
      endDate: endDate,
      passengers: formData.passengers
    }).valueChanges.subscribe((data: any) => {
      this.schedules.set(data?.data?.schedules);
    });
  }
}

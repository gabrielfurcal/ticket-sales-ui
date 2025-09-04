import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { GetStationsGQL } from '../../../graphql/admin-inputs/schema';
import { Apollo } from 'apollo-angular';
import { RoundtripFormValue } from './roundtrip-form.types';

@Component({
  selector: 'app-roundtrip-form',
  imports: [MatTabsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './roundtrip-form.component.html',
  styleUrl: './roundtrip-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoundtripFormComponent implements OnInit {
  constructor(private apollo: Apollo, private fb: FormBuilder, private getStationsGQL: GetStationsGQL) { }

  stations = signal<any[]>([]);
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
    console.log(formData);
  }
}

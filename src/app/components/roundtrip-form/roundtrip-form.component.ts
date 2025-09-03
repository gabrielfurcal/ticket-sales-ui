import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-roundtrip-form',
  imports: [MatTabsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './roundtrip-form.component.html',
  styleUrl: './roundtrip-form.component.scss'
})
export class RoundtripFormComponent implements OnInit {
  constructor(private apollo: Apollo, private fb: FormBuilder) { }

  stations = signal<any[]>([]);
  roundtripForm: any;

  ngOnInit(): void {
    this.roundtripForm = this.fb.group({
      origin: [''],
      destination: [''],
      departureDate: ['', Validators.required],
      returnDate: ['',  Validators.required],
      passengers: [1, Validators.required]
    });

    const query = gql`
      query {
          stations {
              name,
              city {
                city,
                province
              }
          }
      }
    `;

    this.apollo.use('secondClient').watchQuery({
      query: query,
    }).valueChanges.subscribe((data: any) => {
      console.log(data);
      this.stations.set(data?.data?.stations);
    });
  }
}

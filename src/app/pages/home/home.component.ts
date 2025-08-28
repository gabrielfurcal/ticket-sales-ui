import { Component, OnInit, signal } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private apollo: Apollo) { }

  passengers = signal<any[]>([]);

  ngOnInit(): void {
    const query = gql`
      query {
          passengers {
              firstName,
              lastName
          }
      }
    `;

    this.apollo.watchQuery({
      query: query,
    }).valueChanges.subscribe((data: any) => {
      this.passengers.set(data?.data?.passengers);
    });
  }
}
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The `Decimal` scalar type represents a decimal floating-point number. */
  Decimal: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  /** The `Short` scalar type represents non-fractional signed whole 16-bit numeric values. Short can represent values between -(2^15) and 2^15 - 1. */
  Short: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type BaseMutations = {
  __typename?: 'BaseMutations';
  deletePassenger: Scalars['Boolean']['output'];
  deleteTicket: Scalars['Boolean']['output'];
  deleteTicketCategory: Scalars['Boolean']['output'];
  deleteTicketType: Scalars['Boolean']['output'];
  deleteTransaction: Scalars['Boolean']['output'];
  deleteUserCard: Scalars['Boolean']['output'];
  savePassenger?: Maybe<Passenger>;
  saveTicket?: Maybe<Ticket>;
  saveTicketCategory?: Maybe<TicketCategory>;
  saveTicketType?: Maybe<TicketType>;
  saveTransaction?: Maybe<Transaction>;
  saveUserCard?: Maybe<UserCard>;
};


export type BaseMutationsDeletePassengerArgs = {
  id: Scalars['Long']['input'];
};


export type BaseMutationsDeleteTicketArgs = {
  id: Scalars['UUID']['input'];
};


export type BaseMutationsDeleteTicketCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type BaseMutationsDeleteTicketTypeArgs = {
  id: Scalars['Int']['input'];
};


export type BaseMutationsDeleteTransactionArgs = {
  id: Scalars['UUID']['input'];
};


export type BaseMutationsDeleteUserCardArgs = {
  id: Scalars['Int']['input'];
};


export type BaseMutationsSavePassengerArgs = {
  passenger: PassengerInput;
};


export type BaseMutationsSaveTicketArgs = {
  ticket: TicketInput;
};


export type BaseMutationsSaveTicketCategoryArgs = {
  ticketCategory: TicketCategoryInput;
};


export type BaseMutationsSaveTicketTypeArgs = {
  ticketType: TicketTypeInput;
};


export type BaseMutationsSaveTransactionArgs = {
  transaction: TransactionInput;
};


export type BaseMutationsSaveUserCardArgs = {
  userCard: UserCardInput;
};

export type BaseQueries = {
  __typename?: 'BaseQueries';
  passengerById?: Maybe<Passenger>;
  passengers: Array<Passenger>;
  schedules: Array<Schedule>;
  ticketById?: Maybe<Ticket>;
  ticketCategories: Array<TicketCategory>;
  ticketCategoryById?: Maybe<TicketCategory>;
  ticketTypeById?: Maybe<TicketType>;
  ticketTypes: Array<TicketType>;
  tickets: Array<Ticket>;
  transactionById?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  userCardById?: Maybe<UserCard>;
  userCards: Array<UserCard>;
};


export type BaseQueriesPassengerByIdArgs = {
  id: Scalars['Long']['input'];
};


export type BaseQueriesSchedulesArgs = {
  endDate: Scalars['String']['input'];
  endStationId: Scalars['Int']['input'];
  passengers: Scalars['Int']['input'];
  startDate: Scalars['String']['input'];
  startStationId: Scalars['Int']['input'];
};


export type BaseQueriesTicketByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type BaseQueriesTicketCategoryByIdArgs = {
  id: Scalars['Int']['input'];
};


export type BaseQueriesTicketTypeByIdArgs = {
  id: Scalars['Int']['input'];
};


export type BaseQueriesTransactionByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type BaseQueriesUserCardByIdArgs = {
  id: Scalars['Int']['input'];
};

export type City = {
  __typename?: 'City';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  province?: Maybe<Scalars['String']['output']>;
};

export type Passenger = {
  __typename?: 'Passenger';
  address: Scalars['String']['output'];
  birthDate: Scalars['DateTime']['output'];
  city: City;
  countryCode: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['Long']['output'];
  lastName: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  telephone: Scalars['String']['output'];
  unit: Scalars['String']['output'];
};

export type PassengerInput = {
  address: Scalars['String']['input'];
  birthDate: Scalars['DateTime']['input'];
  cityId: Scalars['Int']['input'];
  countryCode: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Long']['input']>;
  lastName: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  telephone: Scalars['String']['input'];
  unit: Scalars['String']['input'];
};

export type Route = {
  __typename?: 'Route';
  distance?: Maybe<Scalars['Float']['output']>;
  endStation?: Maybe<Station>;
  id?: Maybe<Scalars['Int']['output']>;
  startStation?: Maybe<Station>;
  ticketType: Array<TicketType>;
};

export type Schedule = {
  __typename?: 'Schedule';
  arrivalTime?: Maybe<Scalars['String']['output']>;
  departureTime?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  route?: Maybe<Route>;
  status?: Maybe<Status>;
  train?: Maybe<Train>;
};

export type Station = {
  __typename?: 'Station';
  city?: Maybe<City>;
  countryCode?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
};

export type Status = {
  __typename?: 'Status';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  checked: Scalars['Boolean']['output'];
  id: Scalars['UUID']['output'];
  passenger: Passenger;
  schedule: Schedule;
  seat: Scalars['String']['output'];
  ticketCategory: TicketCategory;
  ticketType: TicketType;
  transaction: Transaction;
};

export type TicketCategory = {
  __typename?: 'TicketCategory';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type TicketCategoryInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type TicketInput = {
  checked: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  passengerId: Scalars['Long']['input'];
  scheduleId: Scalars['Int']['input'];
  seat: Scalars['String']['input'];
  ticketCategoryId: Scalars['Int']['input'];
  ticketTypeId: Scalars['Int']['input'];
  transactionId: Scalars['Int']['input'];
};

export type TicketType = {
  __typename?: 'TicketType';
  discountPercentage?: Maybe<Scalars['Decimal']['output']>;
  id: Scalars['Int']['output'];
  route: Route;
  salePrice: Scalars['Decimal']['output'];
  ticketCategory: TicketCategory;
};

export type TicketTypeInput = {
  discountPercentage?: InputMaybe<Scalars['Decimal']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  routeId: Scalars['Int']['input'];
  salePrice: Scalars['Decimal']['input'];
  ticketCategoryId: Scalars['Int']['input'];
};

export type Train = {
  __typename?: 'Train';
  capacity?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  maxSpeed?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Decimal']['output'];
  cardExpirationMonth: Scalars['Short']['output'];
  cardExpirationYear: Scalars['Short']['output'];
  cardNumber: Scalars['String']['output'];
  cvv: Scalars['Short']['output'];
  id: Scalars['UUID']['output'];
  method: Scalars['String']['output'];
  registeredAt: Scalars['DateTime']['output'];
  userCard: UserCard;
};

export type TransactionInput = {
  amount: Scalars['Decimal']['input'];
  cardExpirationMonth: Scalars['Short']['input'];
  cardExpirationYear: Scalars['Short']['input'];
  cardNumber: Scalars['String']['input'];
  cvv: Scalars['Short']['input'];
  id: Scalars['UUID']['input'];
  method: Scalars['String']['input'];
  registeredAt: Scalars['DateTime']['input'];
  userCardId: Scalars['Int']['input'];
};

export type UserCard = {
  __typename?: 'UserCard';
  cardHolderName: Scalars['String']['output'];
  cardNumber: Scalars['String']['output'];
  cvv: Scalars['Short']['output'];
  expirationMonth: Scalars['Short']['output'];
  expirationYear: Scalars['Short']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserCardInput = {
  cardHolderName: Scalars['String']['input'];
  cardNumber: Scalars['String']['input'];
  cvv: Scalars['Short']['input'];
  expirationMonth: Scalars['Short']['input'];
  expirationYear: Scalars['Short']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};

export type GetPassengersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPassengersQuery = { __typename?: 'BaseQueries', passengers: Array<{ __typename?: 'Passenger', firstName: string, lastName: string, email: string }> };

export type GetSchedulesQueryVariables = Exact<{
  startStationId: Scalars['Int']['input'];
  endStationId: Scalars['Int']['input'];
  startDate: Scalars['String']['input'];
  endDate: Scalars['String']['input'];
  passengers: Scalars['Int']['input'];
}>;


export type GetSchedulesQuery = { __typename?: 'BaseQueries', schedules: Array<{ __typename?: 'Schedule', id?: number | null, departureTime?: string | null, arrivalTime?: string | null, route?: { __typename?: 'Route', id?: number | null, distance?: number | null, startStation?: { __typename?: 'Station', name?: string | null, city?: { __typename?: 'City', city?: string | null, province?: string | null } | null } | null, endStation?: { __typename?: 'Station', name?: string | null, city?: { __typename?: 'City', city?: string | null, province?: string | null } | null } | null, ticketType: Array<{ __typename?: 'TicketType', salePrice: any, discountPercentage?: any | null, ticketCategory: { __typename?: 'TicketCategory', name: string } }> } | null }> };

export const GetPassengersDocument = gql`
    query GetPassengers {
  passengers {
    firstName
    lastName
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPassengersGQL extends Apollo.Query<GetPassengersQuery, GetPassengersQueryVariables> {
    override document = GetPassengersDocument;
    override client = 'firstClient';
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSchedulesDocument = gql`
    query GetSchedules($startStationId: Int!, $endStationId: Int!, $startDate: String!, $endDate: String!, $passengers: Int!) {
  schedules(
    startStationId: $startStationId
    endStationId: $endStationId
    startDate: $startDate
    endDate: $endDate
    passengers: $passengers
  ) {
    id
    departureTime
    arrivalTime
    route {
      id
      distance
      startStation {
        name
        city {
          city
          province
        }
      }
      endStation {
        name
        city {
          city
          province
        }
      }
      ticketType {
        salePrice
        discountPercentage
        ticketCategory {
          name
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSchedulesGQL extends Apollo.Query<GetSchedulesQuery, GetSchedulesQueryVariables> {
    override document = GetSchedulesDocument;
    override client = 'firstClient';
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
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
};

export type City = {
  __typename?: 'City';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  province: Scalars['String']['output'];
};

export type CityInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
};

export type Employee = {
  __typename?: 'Employee';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  position: Scalars['String']['output'];
};

export type EmployeeInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
};

/** ##################################### MUTATIONS ###################################### */
export type Mutation = {
  __typename?: 'Mutation';
  deleteCity?: Maybe<Scalars['Boolean']['output']>;
  deleteEmployee?: Maybe<Scalars['Boolean']['output']>;
  deleteRoute?: Maybe<Scalars['Boolean']['output']>;
  deleteSchedule?: Maybe<Scalars['Boolean']['output']>;
  deleteStation?: Maybe<Scalars['Boolean']['output']>;
  deleteStatus?: Maybe<Scalars['Boolean']['output']>;
  deleteTrain?: Maybe<Scalars['Boolean']['output']>;
  saveCity?: Maybe<City>;
  saveEmployee?: Maybe<Employee>;
  saveRoute?: Maybe<Route>;
  saveSchedule?: Maybe<Schedule>;
  saveStation?: Maybe<Station>;
  saveStatus?: Maybe<Status>;
  saveTrain?: Maybe<Train>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteCityArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteEmployeeArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteRouteArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteScheduleArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteStationArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteStatusArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteTrainArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveCityArgs = {
  city?: InputMaybe<CityInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveEmployeeArgs = {
  employee?: InputMaybe<EmployeeInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveRouteArgs = {
  route?: InputMaybe<RouteInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveScheduleArgs = {
  schedule?: InputMaybe<ScheduleInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveStationArgs = {
  station?: InputMaybe<StationInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveStatusArgs = {
  status?: InputMaybe<StatusInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveTrainArgs = {
  train?: InputMaybe<TrainInput>;
};

export type Query = {
  __typename?: 'Query';
  cities: Array<City>;
  cityById?: Maybe<City>;
  employeeById?: Maybe<Employee>;
  employees: Array<Employee>;
  routeById?: Maybe<Route>;
  routes: Array<Route>;
  scheduleById?: Maybe<Schedule>;
  schedules: Array<Schedule>;
  stationById?: Maybe<Station>;
  stations: Array<Station>;
  status: Array<Status>;
  statusById?: Maybe<Status>;
  trainById?: Maybe<Train>;
  trains: Array<Train>;
};


export type QueryCityByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmployeeByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRouteByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryScheduleByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStationByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStatusByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Route = {
  __typename?: 'Route';
  distance?: Maybe<Scalars['Float']['output']>;
  endStation?: Maybe<Station>;
  id: Scalars['ID']['output'];
  startStation?: Maybe<Station>;
};

export type RouteInput = {
  distance?: InputMaybe<Scalars['Float']['input']>;
  endStationId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  startStationId?: InputMaybe<Scalars['Int']['input']>;
};

export type Schedule = {
  __typename?: 'Schedule';
  arrivalTime?: Maybe<Scalars['String']['output']>;
  departureTime?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  route?: Maybe<Route>;
  status?: Maybe<Status>;
  train?: Maybe<Train>;
};

export type ScheduleInput = {
  arrivalTime?: InputMaybe<Scalars['String']['input']>;
  departureTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  routeId?: InputMaybe<Scalars['Int']['input']>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  trainId?: InputMaybe<Scalars['Int']['input']>;
};

export type Station = {
  __typename?: 'Station';
  city?: Maybe<City>;
  countryCode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
};

export type StationInput = {
  cityId?: InputMaybe<Scalars['Int']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
};

export type Status = {
  __typename?: 'Status';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  schedules?: Maybe<Array<Schedule>>;
};

export type StatusInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type Train = {
  __typename?: 'Train';
  capacity?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  maxSpeed?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type TrainInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  maxSpeed?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GetStationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStationsQuery = { __typename?: 'Query', stations: Array<{ __typename?: 'Station', id: string, name: string, city?: { __typename?: 'City', city: string, province: string } | null }> };

export const GetStationsDocument = gql`
    query GetStations {
  stations {
    id
    name
    city {
      city
      province
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetStationsGQL extends Apollo.Query<GetStationsQuery, GetStationsQueryVariables> {
    override document = GetStationsDocument;
    override client = 'secondClient';
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_NAMED_OPTIONS, provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { provideHttpClient } from '@angular/common/http';
import {provideNativeDateAdapter} from '@angular/material/core';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideNativeDateAdapter(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);

      return {
        link: httpLink.create({ uri: environment.graphql.trainCompany, withCredentials: false }),
        cache: new InMemoryCache()
      }
    }),
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: () => {
        const httpLink = inject(HttpLink);

        return {
          firstClient: {
            link: httpLink.create({ uri: environment.graphql.trainCompany, withCredentials: false }),
            cache: new InMemoryCache()
          },
          secondClient: {
            link: httpLink.create({ uri: environment.graphql.adminInputs, withCredentials: false }),
            cache: new InMemoryCache()
          }
        }
      }
    }
  ]
};

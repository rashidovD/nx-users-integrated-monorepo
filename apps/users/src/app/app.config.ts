import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import { API_URL } from "@users/http";
import { environment } from "../environments/environment.development";
import { provideStore } from "@ngrx/store";
import { usersFeature, userEffects } from "@users/data-access";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideEffects } from "@ngrx/effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(userEffects),
    provideHttpClient(),
    provideStore({
      [usersFeature.name]: usersFeature.reducer
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    {
      provide: API_URL,
      useValue: environment.api_url
    }
  ],
};

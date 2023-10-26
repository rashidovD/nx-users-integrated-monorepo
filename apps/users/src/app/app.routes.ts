import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadComponent: () => import('@users/users-list').then(c => c.UsersListComponent)
  }
];

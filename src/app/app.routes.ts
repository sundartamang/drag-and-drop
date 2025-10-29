import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },
  {
    path: 'string',
    loadComponent: () => import('./components/string/string').then((m) => m.String),
  },
  {
    path: 'input-fields',
    loadComponent: () =>
      import('./components/input-fields/input-fields').then((m) => m.InputFields),
  },
];

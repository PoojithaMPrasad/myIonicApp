import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'stepper',
    pathMatch: 'full',
  },
  {
    path: 'stepper',
    loadComponent: () =>
      import('./pages/stepper/stepper.page').then(
        (m) => m.StepperPage
      ),
  },
];

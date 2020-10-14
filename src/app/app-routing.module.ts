import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'observables',
    loadChildren: () =>
      import('./observables/observables.module').then(
        (m) => m.ObservablesModule
      ),
  },
  {
    path: 'registration', component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

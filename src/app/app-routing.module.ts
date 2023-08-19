import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { CountriesComponent } from './components/countries/countries.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: SingleUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'countries', component: CountriesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

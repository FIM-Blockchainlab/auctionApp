import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent  } from './app.component';
import { HomeComponent  } from './home/home.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'home/:contract', component: HomeComponent},
  { path: 'create', component: CreateComponent}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

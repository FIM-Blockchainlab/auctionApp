import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent  } from './app.component';
import { BeneficiaryComponent  } from './beneficiary/beneficiary.component';
import { CreateComponent } from './create/create.component';
import { BidComponent } from './bid/bid.component';
import { HomeComponent } from './home/home.component';
import { BiddingPortalComponent } from './bidding-portal/bidding-portal.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'beneficiary/:contract', component: BeneficiaryComponent},
  { path: 'bid/:contract', component: BidComponent },
  { path: 'create', component: CreateComponent},
  { path: 'bidding-portal', component: BiddingPortalComponent},
  { path: 'home', component: HomeComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

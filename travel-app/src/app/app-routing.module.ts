import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { SignupComponent } from './screens/signup/signup.component';
import { SupportComponent } from './screens/support/support.component';
import { HCMComponent } from './screens/destination/hcm/hcm.component';
import { HanoiComponent } from './screens/destination/hanoi/hanoi.component';
import { NhatrangComponent } from './screens/destination/nhatrang/nhatrang.component';
import { DanangComponent } from './screens/destination/danang/danang.component';
import { DalatComponent } from './screens/destination/dalat/dalat.component';
import { UseraccountComponent } from './screens/useraccount/useraccount.component';

const routes: Routes = [
  { path: 'homepage', component: HomeComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'support', component: SupportComponent },
  { path: 'login', component: LoginComponent },
  { path: 'useraccount', component: UseraccountComponent },
  {  path: 'signup', component: SignupComponent },
  { path: 'destinationHCM', component: HCMComponent},
  { path: 'destinationHANOI', component: HanoiComponent},
  { path: 'destinationNHATRANG', component: NhatrangComponent},
  { path: 'destinationDANANG', component: DanangComponent},
  { path: 'destinationDALAT', component: DalatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

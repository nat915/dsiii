import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'singIn', component: SingInComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'errorPage', component: ErrorPageComponent},
  {path: '**', redirectTo:'/errorPage',pathMatch:'full'}

];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// auth guard
import { AuthGuard } from './guards/auth.guard';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'doctors', component: ParentComponent },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/add-doctor',
    component: AddDoctorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/edit-doctor/:id',
    component: EditDoctorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/doctors',
    component: DoctorsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'doctor-details/:id', component: DoctorDetailsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

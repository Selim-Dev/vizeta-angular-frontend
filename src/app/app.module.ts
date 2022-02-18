import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SendComponent } from './components/send/send.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faStethoscope,
  faPhone,
  faMoneyBill,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// services
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './guards/auth.guard';
import { PublicDoctorsService } from './services/public-doctors.service';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    SendComponent,
    AddDoctorComponent,
    NavbarComponent,
    SignUpComponent,
    LoginComponent,
    NotFoundComponent,
    ReservationFormComponent,
    DoctorDetailsComponent,
    WelcomeComponent,
    DoctorsComponent,
    DashboardComponent,
    EditDoctorComponent,
    AddDoctorComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    PublicDoctorsService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faStar, faStethoscope, faPhone, faMoneyBill, faSpinner);
  }
}

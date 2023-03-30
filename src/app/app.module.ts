import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
//import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './pages/reservation/add/add.component';
import { ShowComponent } from './pages/reservation/show/show.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginFormComponent } from './pages/shared/login-form/login-form.component';
import { Err404Component } from './pages/err404/err404.component';
import { ScheduleComponent } from './pages/shared/schedule/schedule.component';
import { SignupComponent } from './pages/user/signup/signup.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ShowComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    LoginFormComponent,
    Err404Component,
    ScheduleComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

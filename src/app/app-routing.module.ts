import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './pages/err404/err404.component';
import { AddComponent } from './pages/reservation/add/add.component';
import { ShowComponent } from './pages/reservation/show/show.component';
import { ScheduleComponent } from './pages/shared/schedule/schedule.component';
import { SignupComponent } from './pages/user/signup/signup.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';



const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'userReservation',component:ShowComponent},
  {path:'showSchedle',component:ScheduleComponent},
  {path:'addReservation',component:AddComponent},
  {path:'signup',component:SignupComponent},
  {path:'404',component:Err404Component},
  {path:'**',redirectTo:'/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

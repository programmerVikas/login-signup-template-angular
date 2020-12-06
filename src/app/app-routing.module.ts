import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from "./user/login/login.component";
import { TeacherComponent } from "./user/teacher/teacher.component";

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  }
 , {
    path:"teacher",
    component:TeacherComponent
  }
 , {
    path:"",
    component:HomeComponent
  },{
    path:"**",
    component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

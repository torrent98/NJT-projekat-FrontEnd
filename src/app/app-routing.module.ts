import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from "./admin/admin.component";
import { ForbiddenComponent } from "./forbidden/forbidden.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserComponent } from "./user/user.component";
import { AuthGuard } from "./_auth/auth.guard";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [

  { 
    path: "", 
    component: HomeComponent 
  },

  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ["Admin"] },
  },

  {
    path: "user",
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] },
  },

  { 
    path: "login", 
    component: LoginComponent 
  },

  { 
    path: "forbidden", 
    component: ForbiddenComponent 
  },

  {
    path: "register",
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

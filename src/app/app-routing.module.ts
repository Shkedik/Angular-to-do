import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CategoryComponent } from './to-do/login-page/to-do/category.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { RegisterPageComponent } from './auth/registe-page/register-page.component';
import { CategoryComponent } from './to-do/category/category.component';
import { AboutGuard } from './interfaces/all.guards';

const routes: Routes = [{
  path: "api/auth/login",
  component: LoginPageComponent,
  },
  {
    path: "api/auth/register",
    component: RegisterPageComponent,
  },
  {
    path: "category",
    component:CategoryComponent,
    canActivate: [AboutGuard],
  }, 
  {
  path: "",
  redirectTo: "/api/auth/login",
  pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

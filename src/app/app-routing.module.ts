import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CategoryComponent } from './to-do/login-page/to-do/category.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';

const routes: Routes = [{
  path:"api/auth/login",
  component: LoginPageComponent,
},
// {
//   path: "category/:id",
//   component: CategoryComponent
// }
  
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

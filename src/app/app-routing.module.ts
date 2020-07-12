import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './to-do/login-page/to-do/category.component';
import { LoginPageComponent } from './to-do/login-page/login-page.component';

const routes: Routes = [{
path:"login",
component: LoginPageComponent,
},
  // path: ":id",
  // component: CategoryComponent,
  
  // {
  // path: "",
  // redirectTo: "/:id",
  // pathMatch: "full"
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

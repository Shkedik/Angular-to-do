import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './to-do/to-do/category.component';

const routes: Routes = [{
  path: ":id",
  component: CategoryComponent,
  },
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

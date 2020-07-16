import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { ItemsToDoComponent } from './items-to-do/items-to-do.component';

const routes: Routes = [{
    path: "add",
    component: CategoryComponent
  },
  {
    path: "id",
    component: ItemsToDoComponent
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }

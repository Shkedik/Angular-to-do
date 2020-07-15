import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './to-do/category/category.component';
import { AuthGuard } from './core/guards/auth.guards';

const routes: Routes = [{
  path: "auth",
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "category",
    component:CategoryComponent,
    canActivate: [AuthGuard],
  }, 
  {
  path: "**",
  redirectTo: "/auth/login",
  pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

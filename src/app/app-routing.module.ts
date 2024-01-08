import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  {
    path:"login",
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  },
  {
    path:"signup",
    loadChildren: () => import('./signup/signup.module').then(mod => mod.SignupModule),
  },
  {
    path:"admin",
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

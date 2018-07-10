import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "about", 
    component: AboutComponent 
  },

  { 
    path: "", 
    redirectTo: "/", 
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q1Component } from './q1/q1.component'
import { Q2Component } from './q2/q2.component'

const routes: Routes = [
  { path: '', redirectTo: '/q1', pathMatch: 'full' },
  { path: 'q1', component: Q1Component },
  { path: 'q2', component: Q2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

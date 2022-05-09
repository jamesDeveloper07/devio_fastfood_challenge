import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoAccessComponent } from './core/no-access.component';
import { PageNotFoundComponent } from './core/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'no-access', component: NoAccessComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

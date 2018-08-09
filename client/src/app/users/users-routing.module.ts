import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from './me/me.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'me' },
  { path: 'me', component: MeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

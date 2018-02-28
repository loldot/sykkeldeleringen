import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './register/register.component';
import { MeComponent } from './me/me.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    SharedModule
  ],
  exports: [LoginComponent, RegisterComponent, MeComponent],
  declarations: [LoginComponent, RegisterComponent, MeComponent]
})
export class UsersModule { }

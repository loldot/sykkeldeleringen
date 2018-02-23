import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './register/register.component';
import { MeComponent } from './me/me.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [RegisterComponent, MeComponent]
})
export class UsersModule { }

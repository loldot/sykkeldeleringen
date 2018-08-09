import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { MeComponent } from './me/me.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    SharedModule
  ],
  exports: [MeComponent],
  declarations: [MeComponent]
})
export class UsersModule { }

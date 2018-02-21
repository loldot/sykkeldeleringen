import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatListModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule
  ],
  exports:[
    MatButtonModule,
    MatListModule
  ],
  declarations: []
})
export class SharedModule { }

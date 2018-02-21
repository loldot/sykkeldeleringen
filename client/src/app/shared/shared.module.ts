import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatListModule, MatToolbarModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule
  ],
  exports:[
    MatButtonModule,
    MatListModule,
    MatToolbarModule
  ],
  declarations: []
})
export class SharedModule { }

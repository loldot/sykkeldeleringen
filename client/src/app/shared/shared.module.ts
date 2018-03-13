import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule, MatListModule, MatToolbarModule, MatInputModule, 
         MatFormFieldModule, MatSliderModule, MatDatepickerModule,
         MatNativeDateModule, MatCardModule } from '@angular/material';
import { AuthenticateRequestInterceptor, ChallengeInterceptor } from './auth/authenticate-request.interceptor';
import { AuthenticationGuard } from './auth/authentication.guard';
import { AuthenticationService } from './auth/authentication.service'

export { AuthenticationService } from './auth/authentication.service'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  declarations: [],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticateRequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ChallengeInterceptor, multi: true },
  ]
})
export class SharedModule {

}

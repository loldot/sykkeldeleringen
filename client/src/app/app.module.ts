import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    PathNotFoundComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

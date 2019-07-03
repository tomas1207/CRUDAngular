import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitreposComponent } from './gitrepos/gitrepos.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent,
    NavbarComponent,
    GitreposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

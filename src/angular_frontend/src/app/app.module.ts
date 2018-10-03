import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { RegisterComponent } from 'components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    RegisterComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

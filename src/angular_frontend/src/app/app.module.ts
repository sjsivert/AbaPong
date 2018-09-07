import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { RegistrerComponent } from 'components/registrer/registrer.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    RegistrerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule // this is the HTTP module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

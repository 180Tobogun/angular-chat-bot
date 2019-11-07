import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularBotModule} from './angular-bot/angular-bot.module';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularBotModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

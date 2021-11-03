import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountService } from './account.service';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './account/new-account/new-account.component';

import { AppComponent } from './app.component';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LoggingService,
    AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

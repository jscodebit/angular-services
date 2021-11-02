import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './account/new-account/new-account.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

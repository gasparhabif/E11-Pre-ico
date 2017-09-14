import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';

import { AppComponent }           from './app.component';
import { AddressCheckComponent}   from './components/address-check/address-check.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressCheckComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

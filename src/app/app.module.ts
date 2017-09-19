import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';

import { AppComponent }           from './app.component';
import { AddressCheckComponent}   from './components/address-check/address-check.component';
import { AddressCorrectComponent}   from './components/address-correct/address-correct.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressCheckComponent,
    AddressCorrectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

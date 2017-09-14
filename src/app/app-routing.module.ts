import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { AddressCheckComponent }    from './components/address-check/address-check.component';

const routes: Routes = [
  { path: '', redirectTo: '/addresscheck', pathMatch: 'full' },
  { path: 'addresscheck', component: AddressCheckComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

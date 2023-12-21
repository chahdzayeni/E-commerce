import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeadmModule } from './homeadm/homeadm.module';
import { GestprodModule } from './gestprod/gestprod.module';
import { AdminComponent } from './admin.component';
import { GestprodComponent } from './gestprod/gestprod.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeadmModule,
    GestprodModule
  ],
  exports: [
    AdminComponent,
    GestprodComponent
  ]
})
export class AdminModule { }

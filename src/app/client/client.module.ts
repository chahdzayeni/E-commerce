import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ClientComponent } from './client.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminModule } from '../admin/admin.module';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule,
    AboutModule,
    AdminModule
  ],
  exports: [
    ClientComponent,
    AdminComponent
  ]
})
export class ClientModule { }

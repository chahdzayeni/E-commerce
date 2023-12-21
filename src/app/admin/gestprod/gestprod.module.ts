import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { GestprodRoutingModule } from './gestprod-routing.module';
import { GestprodComponent } from './gestprod.component';
import { ProductAddComponent } from './product-add/product-add.component';


@NgModule({
  declarations: [
    GestprodComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    GestprodRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    GestprodComponent
  ]
})
export class GestprodModule { }

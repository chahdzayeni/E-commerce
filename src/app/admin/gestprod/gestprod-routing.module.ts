import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { GestprodComponent } from './gestprod.component';

const routes: Routes = [
  {
    path: 'gestprod',
    component: GestprodComponent},
    { path: 'productadd', component: ProductAddComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestprodRoutingModule { }

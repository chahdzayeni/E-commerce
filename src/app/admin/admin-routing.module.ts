import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GestprodComponent } from './gestprod/gestprod.component';
import { ProductAddComponent } from './gestprod/product-add/product-add.component';

const routes: Routes = [
  {path : 'admin', component : AdminComponent,
  children:[
    {path : 'gest', component : GestprodComponent,
    children:[{path : 'add', component : ProductAddComponent}]
  },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductAddComponent} from '../admin/gestprod/product-add/product-add.component';
import { PageNotFoundComponent } from '../gestion-error/page-not-found/page-not-found.component';
import { AdminComponent } from '../admin/admin.component';
import { GestprodComponent } from '../admin/gestprod/gestprod.component';
const routes: Routes = [
  {path : '', component : ClientComponent,
  children:[
    {path : 'home', component : HomeComponent},
    {path : 'about', component : AboutComponent},
    { path: 'productadd', component: ProductAddComponent },
    
  ]
},
{path :'admin',component :AdminComponent,
children:[
  {path : 'gestprod',component : GestprodComponent},
]}
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

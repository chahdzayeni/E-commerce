import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './client/home/home.component';
import { ClientComponent } from './client/client.component';
import { AboutComponent } from './client/about/about.component';
import { PageNotFoundComponent } from './gestion-error/page-not-found/page-not-found.component'; 
import{ProductAddComponent} from './admin/gestprod/product-add/product-add.component';
import { GestprodComponent } from './admin/gestprod/gestprod.component';
import { HomeProductsComponent } from '../app/client/home/home-products/home-products.component';

const routes: Routes = [
  
  //{path : 'site', component : ClientComponent},
 /* {path : 'home', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : '', redirectTo : '/client', pathMatch : 'full'},
  {path : '', redirectTo : '/home', pathMatch : 'full'},
  {path : '', redirectTo : '/about', pathMatch : 'full'},
  {path :'**', component : AdminComponent},
*/
{ path: '', redirectTo: '/site/home', pathMatch: 'full' },
{path: 'site',
component: ClientComponent,
children: [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  
]
},
{ path: '', component: HomeProductsComponent },

{ path: 'admin',component: AdminComponent},
{ path: 'gest',component: GestprodComponent},
  
{ path: 'product-add', component: ProductAddComponent },

{ path: '**', redirectTo: '/not-found' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
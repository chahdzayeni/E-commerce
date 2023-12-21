import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  
  {path: 'HomeProducts' , component: HomeProductsComponent},
  {path: 'HomeBanner' , component: HomeBannerComponent},
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

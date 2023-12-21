import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs';
import { CrudService } from 'src/app/services/crud.service';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit{
  title = "PRODUITS" ;
  produits !:Produit[] ;
  produit!: Produit;

  onDetail(produit: any) {
    if (produit.description) {
      alert('Description du produit : ' + produit.description);
    } else {
      alert('Aucune description disponible pour ce produit.');
    }
  }
  constructor(private productService: CrudService) {}
 
  getProducts(): void {
      this.productService.getProducts()
      .subscribe(products => this.produits = products);
  
  }
  ngOnInit(): void {
      this.getProducts();
}
productSelected: Produit | null = null;

selectProduct(product: Produit): void {
  this.productSelected = product;
}
}


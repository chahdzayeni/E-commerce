import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Produit } from 'src/app/shared/models/produit';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestprod',
  templateUrl: './gestprod.component.html',
  styleUrls: ['./gestprod.component.css']
})
export class GestprodComponent implements OnInit {
  title = "PRODUITS";
  produits: Produit[] = [];
  produit: Produit | undefined;

  constructor(private productService: CrudService, private router: Router) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.produits = products);
  }

  details(p: Produit): void {
    this.produit = p;
  }

  
  create(): void {
    this.router.navigate(['/product-add']);
  }
  

  update(): void {
    if (this.produit) {
      this.productService.updateProduct(this.produit).subscribe(() => {
        this.getProducts();
      });
    }
  }
  editMode = false; // Variable pour contrôler l'affichage du formulaire d'édition
  editProduct: Produit | undefined;

  // ... Autres méthodes ...

  edit(product: Produit): void {
    // Active le mode d'édition et initialise le produit à éditer
    this.editMode = true;
    this.editProduct = { ...product };
  }
  cancelEdit(): void {
    // Désactive le mode d'édition et réinitialise le produit à éditer
    this.editMode = false;
    this.editProduct = undefined;
  }
  delete(product: Produit): void {
    // Vérifiez si product.id est défini avant d'appeler deleteProduct
    if (product.id !== undefined) {
      // Demander confirmation avant de supprimer
      const confirmDelete = window.confirm('Voulez-vous vraiment supprimer ce produit?');
  
      if (confirmDelete) {
        // Appel de la fonction delete du service CRUD
        this.productService.deleteProduct(product.id).subscribe(() => {
          // Rechargez les produits après la suppression pour mettre à jour la liste
          this.getProducts();
        });
      }
    } else {
      console.error('Product ID is undefined. Cannot delete.');
    }
  }
  
}

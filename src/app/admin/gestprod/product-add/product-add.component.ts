import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, AbstractControl } from '@angular/forms'; 
import { CrudService } from 'src/app/services/crud.service';
import { Produit } from 'src/app/shared/models/produit';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{
  produits: Produit[] = [];
  produit: Produit | undefined;
    productAddForm!: FormGroup; 
   
     ngOnInit(): void {
      this.productAddForm = this.fb.group({ 
        nameControl: [''],
        prixControl:[''],
        descriptionControl:[''],
        imageControl:[''],
        categorieControl:['']
      });
    } 
    constructor(private fb:FormBuilder, private crudService: CrudService) {}
    afficher(){
      alert("Name:"+this.productAddForm.controls['nameControl'].value+"\nPrix:"+this.productAddForm.controls['prixControl'].value+"\nCategorie:"+this.productAddForm.controls['categorieControl'].value);
    } 
    createProduct(): void {
      const newProduct = {
        nom: this.productAddForm.value.nameControl,
        prix: this.productAddForm.value.prixControl,
        description: this.productAddForm.value.descriptionControl,
        image: this.productAddForm.value.imageControl,
        categId: this.productAddForm.value.categorieControl
      };
  
      this.crudService.addProduct(newProduct).subscribe(() => {
        // Optionally, you can navigate to the product list or perform any other actions after creation.
        alert("Product added successfully")
      });
    }
}

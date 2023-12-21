import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of} from 'rxjs';
import { Produit } from '../shared/models/produit';
@Injectable({
 providedIn: 'root'
})
export class CrudService {
 productUrl: string = 'http://localhost:3000/produits';

 httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private http: HttpClient) { }
 //read
 getProducts(): Observable<Produit[]> {
 return this.http.get<Produit[]>(this.productUrl)
 .pipe(
 catchError(this.handleError<Produit[]>('getProducts', []))
 );
 }
  // Create
  addProduct(product: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.productUrl, product, this.httpOptions)
      .pipe(
        catchError(this.handleError<Produit>('addProduct'))
      );
  }
 // Update
 updateProduct(product: Produit): Observable<any> {
    const url = `${this.productUrl}/${product.id}`;
    return this.http.put(url, product, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateProduct'))
      );
  }
 // Delete
 deleteProduct(productId: number): Observable<Produit> {
    const url = `${this.productUrl}/${productId}`;
    return this.http.delete<Produit>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Produit>('deleteProduct'))
      );
  }
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
  console.error(error);
  return of(result as T);
  };
  }
 }

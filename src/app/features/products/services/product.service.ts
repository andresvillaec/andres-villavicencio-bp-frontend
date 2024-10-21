import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Product } from "../models/product.model";
import { HttpGenericService } from "../../../core/services/http-generic.service";

@Injectable({
  providedIn: 'root'  // Ensure this service is available globally
})
export class ProductService {
  private apiUrl = 'http://localhost:3002/bp/products';  // API endpoint

  constructor(private httpGenericService: HttpGenericService<Product>) {}  // Inject HttpClient here

  getProducts(): Observable<Product[]> {
    // We ensure the response uses '{ data: Product[] }' shape
    return this.httpGenericService.getAll<{ data: Product[] }>(this.apiUrl)
      .pipe(
        map(response => response.data)  // Safely extract products array from 'data' field
      );
  }
  getProductById(id: string): Observable<Product> {
    return this.httpGenericService.getById(this.apiUrl, id);
  }
  createProduct(product: Product): Observable<Product> {
    return this.httpGenericService.create(this.apiUrl, product);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.httpGenericService.update(this.apiUrl, id, product);
  }

  deleteProduct(id: string): Observable<void> {
    return this.httpGenericService.delete(this.apiUrl, id);
  }
}
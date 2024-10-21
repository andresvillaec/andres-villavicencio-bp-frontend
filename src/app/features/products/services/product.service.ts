import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'  // Ensure this service is available globally
})
export class ProductService {
  private apiUrl = 'http://localhost:3002/bp/products';  // API endpoint

  constructor(private http: HttpClient) {}  // Inject HttpClient here

  getProducts(): Observable<{ data: Product[] }> {
    return this.http.get<{ data: Product[] }>(this.apiUrl); // Define the expected response type
  }
}
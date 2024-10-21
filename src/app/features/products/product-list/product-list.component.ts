import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from "../models/product.model";
import { FormsModule } from '@angular/forms';
import { DefaultDatePipe } from "../../../shared/pipes/default-date.pipe";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, DefaultDatePipe, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  searchTerm: string = '';

  public products: Product[] = [
    {
      "id": "1",
      "name": "Tarjeta de credito",
      "description": "Adicional del Titular",
      "logo": "logo.png",
      "deliveryDate": new Date(2024, 11, 21),
      "reviewDate": new Date(2025, 2, 15),
    },
    {
      "id": "2",
      "name": "Tarjeta de debito",
      "description": "Solicitada por el cliente",
      "logo": "logo.png",
      "deliveryDate": new Date(2024, 11, 21),
      "reviewDate": new Date(2025, 2, 15),
    },
    {
      "id": "3",
      "name": "Tarjeta de debito",
      "description": "Reposición por perdida",
      "logo": "logo.png",
      "deliveryDate": new Date(2024, 11, 21),
      "reviewDate": new Date(2025, 2, 15),
    },
  ];

  // Function to filter products based on search term
  get filteredProducts(): Product[] {
    if (!this.searchTerm) {
      return this.products; // No search term, return all products
    }

    // Return filtered products based on search term (case-insensitive)
    return this.products.filter(product => {
      const searchQuery = this.searchTerm.toLowerCase();

      return (
        product.id.toLowerCase().includes(searchQuery) ||
        product.logo.toLowerCase().includes(searchQuery) ||
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.deliveryDate.toLocaleDateString('en-GB').includes(searchQuery) || // Format date as dd/mm/yyyy
        product.reviewDate.toLocaleDateString('en-GB').includes(searchQuery)     // Format date as dd/mm/yyyy
      );
    });
  }
}
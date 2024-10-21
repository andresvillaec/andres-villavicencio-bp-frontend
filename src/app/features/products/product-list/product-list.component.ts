import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from "../models/product.model";
import { FormsModule } from '@angular/forms';
import { DefaultDatePipe } from "../../../shared/pipes/default-date.pipe";
import { SearchListService  } from "../../../shared/services/search-list.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, DefaultDatePipe, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  searchTerm: string = '';
  limit: number = 4;

  constructor(private searchListService: SearchListService) {}

  public products: Product[] = [
    {
      "id": "1",
      "name": "Tarjeta de credito",
      "description": "Adicional del Titular",
      "logo": "logo.png",
      "deliveryDate": new Date(2024, 11, 11),
      "reviewDate": new Date(2025, 2, 26),
    },
    {
      "id": "2",
      "name": "Tarjeta de debito",
      "description": "Solicitada por el cliente",
      "logo": "logo.png",
      "deliveryDate": new Date(2024, 11, 21),
      "reviewDate": new Date(2025, 3, 15),
    },
    {
      "id": "3",
      "name": "Tarjeta de debito",
      "description": "Reposición por perdida",
      "logo": "logo.png",
      "deliveryDate": new Date(2024, 12, 31),
      "reviewDate": new Date(2025, 10, 15),
    },
    {
      "id": "4",
      "name": "Tarjeta de debito",
      "description": "Reposición por perdida",
      "logo": "logo.png",
      "deliveryDate": new Date(2024, 12, 31),
      "reviewDate": new Date(2025, 10, 15),
    },
    {
      "id": "5",
      "name": "Tarjeta de debito",
      "description": "Reposición por perdida",
      "logo": "logo.png",
      "deliveryDate": new Date(2024, 12, 31),
      "reviewDate": new Date(2025, 10, 15),
    },
  ];

  // Function to filter products based on search term
  get filteredProducts(): Product[] {
    return this.searchListService
    .filterList(this.products, this.searchTerm)
    .slice(0, this.limit);
  }
}
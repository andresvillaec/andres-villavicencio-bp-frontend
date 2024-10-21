import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from "../models/product.model";
import { DateFormat } from "../../../shared/constants";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public dateFormat = DateFormat;
  public products: Product[] = [
    {
      "id": "1",
      "name":"Tarjeta de credito",
      "description":"Adicional del Titular",
      "logo":"logo.png",
      "deliveryDate": new Date(2024, 11, 21),
      "reviewDate": new Date(2025, 2, 15),
    }
  ];
}

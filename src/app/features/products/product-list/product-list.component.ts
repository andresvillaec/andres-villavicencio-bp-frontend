import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from "../models/product.model";
import { DefaultDatePipe } from "../../../shared/pipes/default-date.pipe";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, DefaultDatePipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public products: Product[] = [
    {
      "id": "1",
      "name":"Tarjeta de credito",
      "description":"Adicional del Titular",
      "logo":"logo.png",
      "deliveryDate": new Date(2024, 11, 21),
      "reviewDate": new Date(2025, 2, 15),
    },
    {
      "id": "2",
      "name":"Tarjeta de debito",
      "description":"Solicitada por el cliente",
      "logo":"logo.png",
      "deliveryDate": new Date(2024, 11, 21),
      "reviewDate": new Date(2025, 2, 15),
    },
    {
      "id": "3",
      "name":"Tarjeta de debito",
      "description":"Reposición por perdida",
      "logo":"logo.png",
      "deliveryDate": new Date(2024, 11, 21),
      "reviewDate": new Date(2025, 2, 15),
    },
  ];
}

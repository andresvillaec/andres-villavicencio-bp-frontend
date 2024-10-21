import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from "../models/product.model";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  public products: Product[] = [
  ];
}

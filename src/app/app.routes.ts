import { Routes } from '@angular/router';
import { ProductListComponent } from "./features/products/product-list/product-list.component";

export const routes: Routes = [
  {
    path: '',
    title: 'Listado de productos',
    component: ProductListComponent,
  },
  {
    path: 'products',
    title: 'Listado de productos',
    component: ProductListComponent,
  },
];

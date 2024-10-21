import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from "../services/product.service";
import { Product } from "../models/product.model";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  productForm!: FormGroup; // Angular form group
  today = new Date(); // To compare the release date

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  // Initialize the form with validation rules
  initializeForm() {
    this.productForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      logo: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      date_release: ['', [Validators.required]], // Custom validator for > today
      date_revision: ['', [Validators.required]] // Custom validator for +1 year
    });
  }

  isFieldInvalid(field: string): boolean {
    return !!(this.productForm.get(field)?.invalid && this.productForm.get(field)?.touched);
  }

  // Submit the form
  onSubmit(): void {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      this.productService.createProduct(newProduct).subscribe({
        next: () => {
          alert('Product created successfully!');
          this.router.navigate(['/products']);  // Redirect on success
        },
        error: (err) => {
          console.error('Error creating product:', err);
          alert('There was an error creating the product.');  // Handle error
        }
      });
    } else {
      alert('Please fill in the form correctly.');
    }
  }
}

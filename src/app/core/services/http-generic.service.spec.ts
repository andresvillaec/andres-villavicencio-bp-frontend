import { TestBed } from '@angular/core/testing';

import { HttpGenericService } from './http-generic.service';
import { Product } from '../../features/products/models/product.model';

describe('HttpGenericService', () => {
  let service: HttpGenericService<Product>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

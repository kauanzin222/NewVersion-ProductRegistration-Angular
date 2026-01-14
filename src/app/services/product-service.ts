import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/ProductInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>("http://localhost:8080/Products");
  }

  save(product: ProductInterface) {
    return this.http.post<ProductInterface>("http://localhost:8080/Products", product);
  }

  update(product: ProductInterface) {
    return this.http.put<ProductInterface>(`http://localhost:8080/Products/${product.id}`, product);
  }

  delete(product: ProductInterface) {
    return this.http.delete<ProductInterface>(`http://localhost:8080/Products/${product.id}`);
  }
}

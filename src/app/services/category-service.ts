import { Injectable } from '@angular/core';
import { CategoryInterface } from '../interfaces/CategoryInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>("http://localhost:8080/Categories");
  }

  save(category: CategoryInterface) {
    return this.http.post<CategoryInterface>("http://localhost:8080/Categories", category);
  }

  update(category: CategoryInterface) {
    return this.http.put<CategoryInterface>(`http://localhost:8080/Categories/${category.id}`, category);
  }

  delete(category: CategoryInterface) {
    return this.http.delete<CategoryInterface>(`http://localhost:8080/Categories/${category.id}`);
  }

}

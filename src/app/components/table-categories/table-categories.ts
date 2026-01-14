import { Component } from '@angular/core';
import { CategoryService } from '../../services/category-service';
import { CategoryInterface } from '../../interfaces/CategoryInterface';

@Component({
  selector: 'app-table-categories',
  standalone: false,
  templateUrl: './table-categories.html',
  styleUrl: './table-categories.css',
})
export class TableCategories {
  showError: boolean = false;
  isUpdate: boolean = false;
  showForm: boolean = false;

  // Cria a lista para utilizar na tabela e objeto vazio
  categories: CategoryInterface[] = [];
  category: CategoryInterface = {} as CategoryInterface;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    //this.categories = this.categoryService.getCategories();
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      /* data é o que vou receber do backend */
      next: data => { this.categories = data }
    });
  }

  saveCategory() {
    if (!this.isUpdate) {
      this.categoryService.save(this.category).subscribe({
        next: data => {
          this.categories.push(data);
        }
      })
    }
    this.category = {} as CategoryInterface;
    this.showForm = false;
  }

  updateCategory(selectedCategory: CategoryInterface) {
    this.isUpdate = true;
    this.category = selectedCategory
    this.showForm = true;
  }

  confirmUpdate() {
    this.categoryService.update(this.category).subscribe({
      next: () => {
        this.category = {} as CategoryInterface;
      }
    })
    this.isUpdate = false;
    this.showForm = false;
  }

  deleteCategory(selectedCategory: CategoryInterface) {
    this.categoryService.delete(selectedCategory).subscribe({
      next: () => {
        this.categories = this.categories.filter(category => category != selectedCategory);
      },
      error: () => {
        this.showError = true;
      }
    })
  }

  resetError() {
    this.showError = false;
  }

  cancelUpdate() {
    this.category = {} as CategoryInterface;
    this.isUpdate = false;
    this.showForm = false;
  }

  create() {
    this.showForm = true;
  }
}

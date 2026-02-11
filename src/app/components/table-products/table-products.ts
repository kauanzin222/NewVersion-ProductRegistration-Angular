import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from '../../interfaces/CategoryInterface';
import { ProductInterface } from '../../interfaces/ProductInterface';
import { CategoryService } from '../../services/category-service';
import { ProductService } from '../../services/product-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table-products',
  standalone: false,
  templateUrl: './table-products.html',
  styleUrl: './table-products.css',
})
export class TableProducts implements OnInit {
  isUpdate: boolean = false;
  showForm: boolean = false;

  categories: CategoryInterface[] = [];

  // Objeto Produto vazio e Array de objetos Produtos
  products: ProductInterface[] = [];
  product: ProductInterface = {} as ProductInterface;
  productOnDelete: ProductInterface = {} as ProductInterface;

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    //this.categories = this.categoryService.getCategories();
    this.loadCategories();
    //this.products = this.productService.getProducts();
    this.loadProducts();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      /* data é o que vou receber do backend */
      next: data => { this.categories = data }
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: data => { this.products = data }
    });
  }

  saveProduct(save: boolean) {
    if (save)
      if (this.isUpdate) {
        this.productService.update(this.product).subscribe({});
      }
      else {
        this.productService.save(this.product).subscribe({
          next: data => {
            this.products.push(data);
            this.product = {} as ProductInterface;
          }
        });
      }

    this.isUpdate = false;
    this.showForm = false;
  };

  updateProduct(selectedProduct: ProductInterface) {
    this.isUpdate = true;
    this.showForm = true;
    this.product = selectedProduct;
  }

  deleteProduct(modal: any, selectedProduct: ProductInterface) {
    this.productOnDelete = selectedProduct;

    this.modalService.open(modal).result.then(
      (confirm) => {
        if (confirm) {
          this.productService.delete(selectedProduct).subscribe({
            next: () => {
              this.products = this.products.filter(product => product != selectedProduct);
            }
          });
        }
      }
    )
  }

  create() {
    this.showForm = true;
  }
}

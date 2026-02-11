import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CategoryInterface } from '../../interfaces/CategoryInterface';
import { ProductInterface } from '../../interfaces/ProductInterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-product',
  standalone: false,
  templateUrl: './register-product.html',
  styleUrls: ['./register-product.css'],
})
export class RegisterProduct implements OnInit, OnChanges {
  isCanceled: boolean = false;

  @Input()
  categories: CategoryInterface[] = {} as CategoryInterface[];

  @Input()
  product: ProductInterface = {} as ProductInterface;

  @Input()
  isUpdate?: boolean;

  @Output()
  saveEmitter = new EventEmitter();

  formGroupProduct: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupProduct = this.formBuilder.group({
      id: { value: null, disabled: true },
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
      newProduct: [''],
      promotion: ['']
    });
  }
  ngOnChanges(): void {
    if (this.isUpdate)
      this.formGroupProduct.setValue(this.product);
  }

  ngOnInit(): void {
  }

  cancel() {
    this.product = {} as ProductInterface;
    this.saveEmitter.emit(false);
  }

  save() {
    if (this.formGroupProduct.valid) {
      Object.assign(this.product, this.formGroupProduct.value)
      this.saveEmitter.emit(true);
    }
  }

  selectedCategory(category1: CategoryInterface, category2: CategoryInterface) {
    return category1 && category2 ? category1.id === category2.id : false;
  }

  get pfgName() {return this.formGroupProduct.get("name")};
  get pfgDescription() {return this.formGroupProduct.get("description")};
  get pfgPrice() {return this.formGroupProduct.get("price")};
  get pfgCategory() {return this.formGroupProduct.get("category")};
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryInterface } from '../../interfaces/CategoryInterface';
import { ProductInterface } from '../../interfaces/ProductInterface';

@Component({
  selector: 'app-register-product',
  standalone: false,
  templateUrl: './register-product.html',
  styleUrls: ['./register-product.css'],
})
export class RegisterProduct implements OnInit {
  isCanceled: boolean = false;

  @Input()
  categories: CategoryInterface[] = {} as CategoryInterface[];

  @Input()
  product?: ProductInterface;

  @Input()
  isUpdate?: boolean;

  @Output()
  saveEmitter = new EventEmitter();

  @Output()
  updateEmitter = new EventEmitter();

  @Output()
  cancelEmitter = new EventEmitter();

  cancel() {
    this.product = {} as ProductInterface;
    this.cancelEmitter.emit();
  }

  save() {
    this.saveEmitter.emit();
  }

  update() {
    this.updateEmitter.emit();
  }
  
  selectedCategory(category1: CategoryInterface, category2: CategoryInterface) {
    return category1 && category2 ? category1.id === category2.id : false;
  }

  constructor() { }
  ngOnInit(): void {
  }
}

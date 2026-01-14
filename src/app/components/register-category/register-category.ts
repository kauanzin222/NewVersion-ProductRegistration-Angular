import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryInterface } from '../../interfaces/CategoryInterface';

@Component({
  selector: 'app-register-category',
  standalone: false,
  templateUrl: './register-category.html',
  styleUrl: './register-category.css',
})
export class RegisterCategory {

  @Input()
  categories: CategoryInterface[] = {} as CategoryInterface[];

  @Input()
  category?: CategoryInterface;

  @Input()
  isUpdate?: boolean;

  @Output()
  saveEmitter = new EventEmitter();
  
  @Output()
  updateEmitter = new EventEmitter();

  @Output()
  cancelEmitter = new EventEmitter();

  cancel() {
    this.category = {} as CategoryInterface;
    this.cancelEmitter.emit();
  }

  save() {
    this.saveEmitter.emit();
  }

  update() {
    this.updateEmitter.emit();
  }

}

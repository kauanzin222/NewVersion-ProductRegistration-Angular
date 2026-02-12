import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryInterface } from '../../interfaces/CategoryInterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-category',
  standalone: false,
  templateUrl: './register-category.html',
  styleUrl: './register-category.css',
})
export class RegisterCategory {

  formGroupCategory: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupCategory = this.formBuilder.group({
      id: { value: null, disabled: true },
      name: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  @Input()
  categories: CategoryInterface[] = {} as CategoryInterface[];

  @Input()
  category: CategoryInterface = {} as CategoryInterface;

  @Input()
  isUpdate?: boolean;

  @Output()
  saveEmitter = new EventEmitter();

  cancel() {
    this.saveEmitter.emit(false);
  }

  ngOnChanges(): void {
    if (this.isUpdate) {
      this.formGroupCategory.setValue(this.category);
    }
  }

  save() {
    if (this.formGroupCategory.valid) {
      Object.assign(this.category, this.formGroupCategory.value)
      this.saveEmitter.emit(true);
    }
  }

  get cfgName() { return this.formGroupCategory.get("name") };
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProducts } from './table-products';

describe('TableProducts', () => {
  let component: TableProducts;
  let fixture: ComponentFixture<TableProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

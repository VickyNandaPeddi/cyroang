import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductrangeComponent } from './productrange.component';

describe('ProductrangeComponent', () => {
  let component: ProductrangeComponent;
  let fixture: ComponentFixture<ProductrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

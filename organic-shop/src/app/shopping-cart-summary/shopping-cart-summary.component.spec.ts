import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopppingCartSummaryComponent } from './shopping-cart-summary.component';

describe('ShopppingCartSummaryComponent', () => {
  let component: ShopppingCartSummaryComponent;
  let fixture: ComponentFixture<ShopppingCartSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopppingCartSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopppingCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

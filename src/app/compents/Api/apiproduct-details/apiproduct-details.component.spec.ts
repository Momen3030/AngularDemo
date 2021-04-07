import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiproductDetailsComponent } from './apiproduct-details.component';

describe('ApiproductDetailsComponent', () => {
  let component: ApiproductDetailsComponent;
  let fixture: ComponentFixture<ApiproductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiproductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiproductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

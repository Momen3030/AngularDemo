import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Iproduct } from 'src/app/model/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() selectedCatID: number;
  @Output() TotalPriceChangedEvent: EventEmitter<number>;
  products: Iproduct[];
  total: number;

  constructor(private _prdServ: ProductService, private _router: Router) {
    this.TotalPriceChangedEvent = new EventEmitter<number>();
    this.total = 0;
    this.products = this._prdServ.getAllProducts();
    console.log(`constructor ${this.selectedCatID}`);

  }
  ngOnChanges(): void {
    console.log(`ngOnChanges  ${this.selectedCatID}`);
    console.log(this.getProductsByCatID());

  }

  ngOnInit(): void {
    console.log(` ngOnInit ${this.selectedCatID}`);
  }

  getProductsByCatID(): Iproduct[] {
    return this._prdServ.getProductsByCatID(this.selectedCatID);
  }

  TotalPrice(price, count) {
    this.total += price * count;
    this.TotalPriceChangedEvent.emit(this.total);
    console.log(this.total);

  }
  More(id) {
    this._router.navigate(['/Product', id])
  }
}

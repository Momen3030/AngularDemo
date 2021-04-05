import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { Iproduct } from 'src/app/model/interfaces/iproduct';

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
  constructor() {
    this.TotalPriceChangedEvent = new EventEmitter<number>();
    this.total = 0;
    this.products = [
      { id: 3, name: "iphone 7", price: 6000, quntity: 3, categoryID: 1 },
      { id: 5, name: "nokia X", price: 4000, quntity: 0, categoryID: 1 },
      { id: 6, name: "tab 1 ", price: 2000, quntity: 1, categoryID: 2 },
      { id: 7, name: "ipda ", price: 6000, quntity: 0, categoryID: 2 },
      { id: 9, name: "dell Lab", price: 6000, quntity: 3, categoryID: 3 },
      { id: 10, name: "lenovo Lab", price: 6000, quntity: 2, categoryID: 3 },
      { id: 12, name: "iphone 12", price: 25000, quntity: 1, categoryID: 1 }
    ]
    console.log(`constructor ${this.selectedCatID}`);

  }
  ngOnChanges(): void {
    console.log(`ngOnChanges  ${this.selectedCatID}`);
    console.log(this.getProductsByCatID());

  }

  ngOnInit(): void {
    console.log(` ngOnInit ${this.selectedCatID}`);
  }

  ///return filter array 
  getProductsByCatID(): Iproduct[] {
    ///filter search in array and return arrary filtered
    return this.products.filter((prd) => {
      return prd.categoryID == this.selectedCatID;
    })
  }

  TotalPrice(price, count) {
    this.total += price * count;
    this.TotalPriceChangedEvent.emit(this.total);
    console.log(this.total);

  }
}

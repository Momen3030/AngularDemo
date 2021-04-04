import { Component } from '@angular/core';
import { Iproduct } from 'src/app/model/interfaces/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Iproduct[];
  testBind: string;
  constructor() {
    this.testBind = "php";
    this.products = [
      { id: 3, name: "iphone 7", price: 6000, quntity: 3 },
      { id: 5, name: "nokia X", price: 4000, quntity: 0 },
      { id: 6, name: "tab 1 ", price: 2000, quntity: 1 },
      { id: 7, name: "ipda ", price: 6000, quntity: 0 },
      { id: 9, name: "dell Lab", price: 6000, quntity: 3 },
      { id: 10, name: "lenovo Lab", price: 6000, quntity: 2 },
      { id: 12, name: "iphone 12", price: 25000, quntity: 1 }
    ]
  }


}

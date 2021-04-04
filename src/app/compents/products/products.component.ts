import { Component } from '@angular/core';
import { Iproduct } from 'src/app/model/interfaces/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Iproduct[];
  constructor() {
    this.products = [
      { id: 3, name: "Iphone 7", price: 6000, quntity: 3 },
      { id: 5, name: "Nokia X", price: 4000, quntity: 0 },
      { id: 6, name: "Tab 1 ", price: 2000, quntity: 1 },
      { id: 7, name: "Ipda ", price: 6000, quntity: 0 },
      { id: 9, name: "Dell Lab", price: 6000, quntity: 3 },
      { id: 10, name: "lenovo Lab", price: 6000, quntity: 2 },
      { id: 12, name: "Iphone 12", price: 25000, quntity: 1 }
    ]
  }


}

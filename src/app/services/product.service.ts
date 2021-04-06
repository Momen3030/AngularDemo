import { Injectable } from '@angular/core';
import { Iproduct } from '../model/interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Iproduct[];
  constructor() {
    this.products = [
      { id: 3, name: "iphone 7", price: 6000, quntity: 3, categoryID: 1 },
      { id: 5, name: "nokia X", price: 4000, quntity: 0, categoryID: 1 },
      { id: 6, name: "tab 1 ", price: 2000, quntity: 1, categoryID: 2 },
      { id: 7, name: "ipda ", price: 6000, quntity: 0, categoryID: 2 },
      { id: 9, name: "dell Lab", price: 6000, quntity: 3, categoryID: 3 },
      { id: 10, name: "lenovo Lab", price: 6000, quntity: 2, categoryID: 3 },
      { id: 12, name: "iphone 12", price: 25000, quntity: 1, categoryID: 1 }
    ]
  }

  getAllProducts(): Iproduct[] {
    return this.products;
  }


  getProductsByCatID(catID): Iproduct[] {
    ///filter search in array and return arrary filtered
    return this.products.filter((prd) => {
      return prd.categoryID == catID;
    })
  }
  getProductByID(pid): Iproduct {
    return this.products.find(prd => prd.id == pid);
  }
}

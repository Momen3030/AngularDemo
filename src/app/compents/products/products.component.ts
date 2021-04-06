import { Component } from '@angular/core';
import { Iproduct } from 'src/app/model/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Iproduct[];
  testBind: string;
  constructor(private _prdSevice: ProductService) {
    this.testBind = "php";
    this.products = this._prdSevice.getAllProducts();
  }


}

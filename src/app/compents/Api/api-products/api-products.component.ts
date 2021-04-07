import { Component, OnInit } from '@angular/core';
import { ApiIproduct } from 'src/app/model/interfaces/api-iproduct';
import { ApiProductService } from 'src/app/services/Api/api-product.service';

@Component({
  selector: 'app-api-products',
  templateUrl: './api-products.component.html',
  styleUrls: ['./api-products.component.css']
})
export class ApiProductsComponent implements OnInit {
  products: ApiIproduct[];
  constructor(private _ApiPrdServ: ApiProductService) { }

  ngOnInit(): void {
    this._ApiPrdServ.getAllProducts().subscribe((data) => {
      // console.log(data);
      this.products = data;
      // console.log(this.products);

    }, (err) => {
      console.log(err);

    })
  }

}

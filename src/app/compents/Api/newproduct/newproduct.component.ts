import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiIproduct } from 'src/app/model/interfaces/api-iproduct';
import { ApiProductService } from 'src/app/services/Api/api-product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  prd: ApiIproduct;
  constructor(private _ApiPrdServ: ApiProductService, private _router: Router) {
    this.prd = {
      name: '',
      description: '',
      price: null,
      quantity: null
    }
  }

  ngOnInit(): void {

  }

  add() {
    this._ApiPrdServ.insertProduct(this.prd).subscribe((data) => {
      console.log(data);
      this._router.navigateByUrl('/Apiproducts');
    }, (err) => {
      console.log(err);
    })
  }
}

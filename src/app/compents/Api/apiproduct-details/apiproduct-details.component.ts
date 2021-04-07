import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiIproduct } from 'src/app/model/interfaces/api-iproduct';
import { ApiProductService } from 'src/app/services/Api/api-product.service';

@Component({
  selector: 'app-apiproduct-details',
  templateUrl: './apiproduct-details.component.html',
  styleUrls: ['./apiproduct-details.component.css']
})
export class ApiproductDetailsComponent implements OnInit {
  prd: ApiIproduct;
  constructor(private _activatedRoute: ActivatedRoute, private _ApiPrdSrerv: ApiProductService) { }

  ngOnInit(): void {
    let pid = this._activatedRoute.snapshot.params["pid"];
    this._ApiPrdSrerv.getProductByID(pid).subscribe((res) => {
      this.prd = res;
    }, (err) => {
      console.log(err);
    })

  }

}

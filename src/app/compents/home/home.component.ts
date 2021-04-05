import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CompanyInfo } from 'src/app/model/classes/company-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  title: string;
  cInfo: CompanyInfo;
  isServiceDisplayed: boolean;
  constructor() {
    this.isServiceDisplayed = true;
    this.cInfo = new CompanyInfo(1, "php company",
      "https://dummyimage.com/300x300/ebdfeb/2c35b8&text=Test+Demo"
      , ["HR", "Marketing", "Seles"],
      100000,
      new Date());
    this.title = " ITI PHP Q2";
    console.log("in constructor ");
  }

  ngOnChanges(): void {
    console.log("in ngOnChanges ");

  }
  ngOnInit(): void {
    console.log("in ngOnInit ");
  }



  Toggle() {
    this.isServiceDisplayed = !this.isServiceDisplayed;
    console.log("Done !!");

  }

}

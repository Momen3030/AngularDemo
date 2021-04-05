import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/model/interfaces/icategory';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  categories: Icategory[];
  catID: number;
  TotalInParent: number;
  @ViewChild('hThree') elem: ElementRef;
  @ViewChild('SelCat') elem2: ElementRef;
  constructor() {
    this.TotalInParent = 0;
    this.categories = [
      { id: 1, name: "Mobiles" },
      { id: 2, name: "Tablets" },
      { id: 3, name: "Labtops" }
    ];

  }
  ngAfterViewInit(): void {
    this.elem.nativeElement.style.color = "red";
    this.elem2.nativeElement.style.color = "orange";
  }

  ngOnInit(): void {


  }
  TotalPriceInParent(total) {
    // console.log(total);
    this.TotalInParent = total;

  }
}

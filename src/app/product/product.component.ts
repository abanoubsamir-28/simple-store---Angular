import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productItem :any;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  seeMore() {
    this.router.navigate([`productdetails/${this.productItem.id}`]) ;
  }

}

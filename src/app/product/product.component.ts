import { CardService } from './../card.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  numOfProducts :any ;

  @Input() productItem :any;
  constructor(private router : Router , private cardService:CardService) { }

  ngOnInit(): void {
    this.cardService.currentAddedProducts.subscribe(
      (value) => (this.numOfProducts = value)
    );
  }

  seeMore() {
    this.router.navigate([`productdetails/${this.productItem.id}`]) ;
  }
  addProduct() {
    console.log("Added from prodcut component") ;
    this.cardService.updateAddedProducts(this.numOfProducts+1) ;
    this.cardService.updateItem(this.productItem) ; 
  }

}

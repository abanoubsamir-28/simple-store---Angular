import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  id : any;
  product : any ;
  constructor( private activeroute : ActivatedRoute , private productService : ProductsServiceService) {
    this.activeroute.params.subscribe((params)=>{
      this.id = params.id ;
    })
  }

  ngOnInit(): void {
    this.productService.getProductDetails(this.id).subscribe(
      (res)=>{
        this.product = res ;
      } ,
      (error) => {console.log(error)}
    )
  }
}

import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  itemCards : any ;
  totalPrice :any ;
  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    this.itemCards = this.cardService.sendItems() ;
    this.totalPrice = this.calculatePrice();
  }

  calculatePrice() :number {
    let price = 0 ;
    for (const item of this.itemCards) {
      price += item.price ;
      console.log("The Price now" , price) ;
    }
    return price ;
  }

}

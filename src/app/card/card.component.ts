import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  itemCards : any = [];
  totalPrice :any ;
  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    this.itemCards = this.cardService.sendItems() ;
    this.totalPrice = this.calculatePrice();
    this.editItems() ;
  }

  editItems() {
    this.itemCards.forEach((element:any) => {
      element.quantity = 1 ;
    });
  }

  calculatePrice(price = 0) :number {
    for (const item of this.itemCards) {
      price += item.price ;
    }
    return price ;
  }

  // Increasing
  addPrice(item:any) {
    this.totalPrice+=item.price ;
    this.addQuantity(item) ;
  }
  addQuantity(item:any) {
    item.quantity += 1 ;
  }

  // Decreasing
  remove(item:any) {
    this.itemCards = this.itemCards.filter((Product:any) => Product.id != item.id) ;
    this.cardService.updateAddedProducts(this.itemCards.length) ;
    this.decreaseTotalPrice(item) ;
  }

  decreaseTotalPrice(item:any) {
    this.totalPrice -= item.price * item.quantity ;
  }
  decreasePrice(item:any) {
    this.totalPrice-=item.price ;
    this.remQuantity(item) ;
  }
  remQuantity(item:any) {
    console.log(item.quantity)
    if(item.quantity == 1) {
      this.remove(item) ;
    } else {
      item.quantity -= 1 ;
    }

  }
}

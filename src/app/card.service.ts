import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  allProdsList : object[] = [] ;

   private addedProducts = new BehaviorSubject(0) ;
  currentAddedProducts = this.addedProducts.asObservable() ;

  updateAddedProducts(productsNumber:number) {
    return this.addedProducts.next(productsNumber) ;
  }


  updateItem(item:any) {
    console.log("Service Update Fired");

    this.allProdsList.push(item) ;
  }
  sendItems() {
    return this.allProdsList ;
  }

  constructor() { }
}



// private item = new BehaviorSubject([])
// currentItem = this.item.asObservable() ;
// this.item.next(item) ;

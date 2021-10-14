import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  counter:any ;
  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    this.cardService.currentAddedProducts.subscribe(value => this.counter = value) ; 
  }

}

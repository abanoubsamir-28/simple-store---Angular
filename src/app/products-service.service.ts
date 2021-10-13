import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http : HttpClient) { }
  getProducts() {
    return this.http.get("https://fakestoreapi.com/products") ;
  }
  getProductDetails(id:number) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}

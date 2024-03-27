import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  //products array of objects
  public isEdit: boolean = false;
  public i:number = 0;
  public newProduct: any = {
    name: "", price: 0, rating: 0, freeDelivery: false
  }
  public products: any = [
    { name: 'pen', price: 10, rating: 2, freeDelivery: true },
    { name: 'phone', price: 100, rating: 2, freeDelivery: false },
    { name: 'shirt', price: 400, rating: 4, freeDelivery: true },
    { name: 'cap', price: 200, rating: 5, freeDelivery: false },
    { name: 'mobile case', price: 300, rating: 2, freeDelivery: true },
    { name: 'remote', price: 400, rating: 2.5, freeDelivery: false }
  ];
  pricelowtohigh() {
    this.products = this.products.sort((a: any, b: any) => a.price - b.price)
  }
  pricehightolow() {
    this.products = this.products.sort((a: any, b: any) => b.price - a.price)
  }
  ratinglowtohigh() {
    this.products = this.products.sort((a: any, b: any) => a.rating - b.rating)
  }
  ratinghightolow() {
    this.products = this.products.sort((a: any, b: any) => b.rating - a.rating)
  }
  
  //TO CREATE A NEW PRODUCT
  create() {
    this.products.push({ ...this.newProduct });
    alert("created successfully");
    this.newProduct.name = "";
    this.newProduct.price = 0;
    this.newProduct.rating = 0;
    this.newProduct.freeDelivery = 0;
  }

  delete(i: number) {
    this.products.splice(i, 1);

  }
  update(selectedproduct: any, i:number) {
    this.isEdit = true;
    this.i = i;

    this.products = { ...selectedproduct };

  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  isHonda: boolean = false;
  isBMW: boolean = false;
  isAudi: boolean = false;
  honda() {
    this.isHonda = true;
    this.isBMW = false;
    this.isAudi = false;

  }
  bmw() {
    this.isHonda = false;
    this.isBMW = true;
    this.isAudi = false;


  }
  audi() {

    this.isHonda = false;
    this.isBMW = false;
    this.isAudi = true;

  }



}

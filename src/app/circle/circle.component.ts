import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  public rad: number = 0;
  
  public result: number = this.rad;
  area() {
    this.result = +3.14159*(this.rad*this.rad);



  }
  perimeter() {

    this.result =  (2*(3.14159)*this.rad);
  }

}

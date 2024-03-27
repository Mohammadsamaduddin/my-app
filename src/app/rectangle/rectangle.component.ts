import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  public len: number = 0;
  public bre: number = 0;
  public result: number = this.len + this.bre;
  area() {
    this.result = this.len * this.bre;


  }
  perimeter() {

    this.result = 2* (this.len * this.bre);
  }


}

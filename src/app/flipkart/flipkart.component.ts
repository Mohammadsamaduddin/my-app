import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  public products: any = [];
  constructor(private flipkartService: FlipkartService) {
    flipkartService.getProducts().subscribe(
      (data: any) => {
        this.products = data;
      },
      (err: any) => {
        alert("Internal server error");
      }

    )
  }

}

import { Component, TemplateRef } from '@angular/core';
import { Cars1Service } from '../cars1.service';
import { identifierName } from '@angular/compiler';
import { query } from '@angular/animations';

type NewType = Cars1Service;

@Component({
  selector: 'app-cars1',
  templateUrl: './cars1.component.html',
  styleUrls: ['./cars1.component.css']
})
export class Cars1Component {
  public cars: any = [];
  public term: string = '';
  public pageNo: number = 0;
  public column: string = '';
  public order: string = '';
  public id: string = '';
  public queries: any = {
    filter: "",
    limit: 10,
    pageNo: 0,
    sortBy: "",
    order: ""
  }

  constructor(private cars1Service: Cars1Service) {
    this.cars1Service.getCars().subscribe(
      (data: any) => {
        this.cars = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }
  filterCars() {
    this.cars1Service.getFilteredCars(this.term).subscribe(
      (data: any) => {
        this.cars = data;

      },
      (err: any) => {
        alert("internal server error ")
      }

    )
  }

  getPagedCars() {
    this.cars1Service.getPagedCars(this.pageNo).subscribe(
      (data: any) => {
        this.cars = data;

      },
      (err: any) => {
        alert("internal server error ")
      }

    )
  }

  getSortedCars() {
    this.cars1Service.getSortedCars(this.column, this.order).subscribe(
      (data: any) => {
        this.cars = data;

      },
      (err: any) => {
        alert("internal server error ")
      }

    )
  }

  getDeletedCars(id: string) {
    this.cars1Service.getDeletedCars(id).subscribe(
      (data: any) => {
        alert("deleted successfully");
        location.reload();

      },
      (err: any) => {
        alert("internal server error ")
      }

    )
  }

  loadData() {
    this.cars1Service.loadData(this.queries).subscribe(
      (data: any) => {
        this.cars = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }


}

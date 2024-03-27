import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cars1Service } from '../cars1.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {
  constructor(private cars1Service: Cars1Service) { }
  public carForm: FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      color: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      image: new FormControl()
    }

  )
  submit() {
    this.cars1Service.createcar(this.carForm.value).subscribe(
      (data: any) => {
        alert("created successfully");
        this.carForm.reset();
      },
      (err: any) => {
        alert("creation failed");
      }
    )
  }

}

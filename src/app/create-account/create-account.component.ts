import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  constructor(private accountsService:AccountsService){}
  public accountForm: FormGroup = new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      profie_picture: new FormControl(),
      city: new FormControl()
    }
  )
  submit(){
    this.accountsService.createaccount(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("created successfully");
        this.accountForm.reset();
      },
      (err:any)=>{
        alert("creation failed");
      }
    )
  }
}

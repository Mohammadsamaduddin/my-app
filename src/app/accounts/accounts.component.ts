import { Component, TemplateRef } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  public accounts: any = [];
  public term: string = '';
  public page: number = 0;
  public column: string = '';
  public order: string = '';
  constructor(private accountsService: AccountsService) {

    accountsService.getAccounts().subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }
  getAname() {
    this.accountsService.getAname(this.term).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("Internal server down")
      }

    )
  }
  Pages() {
    this.accountsService.getPages(this.page).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }

  Sort() {
    this.accountsService.getSorted(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  delete(id:string){
    this.accountsService.deleted(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error")
      }

    )
  }
}
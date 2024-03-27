import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private httpClient: HttpClient) { }
  getAccounts(): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }

  getAname(term: string): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter=" + term);
  }

  getPages(page: number): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page=" + page);

  }

  getSorted(column: string, order: string): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy=" + column + "&order=" + order);
  }
  
  createaccount(data:any):Observable<any>{
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals", data);
  }

  deleted(id:string):Observable<any>{
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }


}

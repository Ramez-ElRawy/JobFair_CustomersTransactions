import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../Interfaces/icustomer';
import { ITransaction } from '../Interfaces/itransaction';

@Injectable({
  providedIn: 'root'
})
export class UsersTransactionsService {

  // private baseUrl = 'http://localhost:3000';
  private baseUrl = 'https://my-json-server.typicode.com/Ramez-ElRawy/Customers_Transactions_json/main/db.json';

  constructor(private _HttpClient: HttpClient) {}

  getAllTransactions(): Observable<ITransaction[]> {
    return this._HttpClient.get<ITransaction[]>(`${this.baseUrl}/transactions`);
  }

  getAllCustomers(): Observable<ICustomer[]> {
    return this._HttpClient.get<ICustomer[]>(`${this.baseUrl}/customers`);
  }

  getCustomerTransactions(customerId: number): Observable<ITransaction[]> {
    return this._HttpClient.get<ITransaction[]>(`${this.baseUrl}/transactions?customer_id=${customerId}`);
  }

}

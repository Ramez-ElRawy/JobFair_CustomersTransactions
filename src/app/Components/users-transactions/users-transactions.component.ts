import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/Interfaces/icustomer';
import { ITransaction } from 'src/app/Interfaces/itransaction';
import { UsersTransactionsService } from 'src/app/Services/users-transactions.service';
@Component({
  selector: 'app-users-transactions',
  templateUrl: './users-transactions.component.html',
  styleUrls: ['./users-transactions.component.css'],
})
export class UsersTransactionsComponent implements OnInit {
  allTransactions: ITransaction[] = [];
  allCustomers: ICustomer[] = [];
  nameSearchTerm: string = '';
  amountSearchTerm!: number;
  customerTransactionsPerDay: { date: string; totalAmount: number }[] = [];
  selectedCustomerName: string | undefined;

  constructor(private usersTransactionsService: UsersTransactionsService) {}

  ngOnInit(): void {
    // this.getAllTransactions();
    this.getAllData();
  }

  // getAllTransactions(): void {
  //   this.usersTransactionsService.getAllTransactions().subscribe({
  //     next: (transactions) => {
  //       this.allTransactions = transactions;
  //     },
  //     error: (err) => {
  //       console.error('Error fetching transactions:', err);
  //     },
  //   });
  // }

  getAllData(): void {
    this.usersTransactionsService.getAllCustomers().subscribe({
      next: (customers) => {
        this.allCustomers = customers;
        this.allCustomers.map((customer) => {
          customers.filter((filteredCustomer) => {
            if (filteredCustomer.id == customer.id) {
              customer.name = filteredCustomer.name;
            }
          });
          this.usersTransactionsService.getAllTransactions().subscribe({
            next: (transactions) => {
              console.log(transactions);
              customer.transactions = transactions.filter((transaction) => {
                if (transaction.customer_id == customer.id) {
                  return transaction;
                } else {
                  return null;
                }
              });
            },
          });
        });
        console.log(this.allCustomers);
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      },
    });
  }

  getCustomerTransactionsPerDay(
    customerId: number,
    customerName: string
  ): void {
    this.selectedCustomerName = customerName;
    this.usersTransactionsService
      .getCustomerTransactions(customerId)
      .subscribe({
        next: (transactions) => {
          this.customerTransactionsPerDay = transactions.map((transaction) => ({
            date: transaction.date,
            totalAmount: transaction.amount,
          }));
        },
        error: (err) => {
          console.error('Error fetching customer transactions:', err);
        },
      });
  }
}

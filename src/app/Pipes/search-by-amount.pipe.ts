import { Pipe, PipeTransform } from '@angular/core';
import { ITransaction } from '../Interfaces/itransaction';

@Pipe({
  name: 'searchByAmount',
})
export class SearchByAmountPipe implements PipeTransform {
  transform(
    transactions: ITransaction[],
    amountSearchTerm: number
  ): ITransaction[] {
    if (!transactions || !amountSearchTerm) {
      return transactions;
    }

    return transactions.filter((transaction) =>
      transaction.amount.toString().includes(amountSearchTerm.toString())
    );
  }
}

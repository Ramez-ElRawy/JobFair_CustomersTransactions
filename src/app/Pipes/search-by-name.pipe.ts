import { Pipe, PipeTransform } from '@angular/core';
import { ICustomer } from '../Interfaces/icustomer';

@Pipe({
  name: 'searchByName',
})
export class SearchByNamePipe implements PipeTransform {
  transform(
    customers: ICustomer[] | null,
    searchTerm: string
  ): ICustomer[] | null {
    if (!customers || !searchTerm.trim()) {
      return customers;
    }

    searchTerm = searchTerm.toLowerCase();
    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(searchTerm)
    );
  }
}

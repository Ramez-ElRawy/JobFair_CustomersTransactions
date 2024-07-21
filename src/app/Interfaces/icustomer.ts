import { ITransaction } from "./itransaction";

export interface ICustomer {
    id:number;
    name:string;
    transactions:ITransaction[];
}

import { storeDetail } from "./interface.js";

export class Deposit {
    private _name!: string;
    private _deposit!: number;
    private _bankname!: string;

    constructor(details?: storeDetail) {
        if (details) {
            this._name = details.name;
            this._deposit = details.Amt;
            this._bankname = details.bankname;
        }
    }

    // Getter and setter for _name
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    // Getter and setter for _deposit
    get deposit(): number {
        return this._deposit;
    }

    set deposit(value: number) {
        this._deposit = value;
    }

    // Getter and setter for _bankname
    get bankname(): string {
        return this._bankname;
    }

    set bankname(value: string) {
        this._bankname = value;
    }

    withdraw(withdrawAmount:number){
        let Balance=this._deposit-withdrawAmount
        console.log(`${this._name} withdrew Rs ${withdrawAmount}. Remaining balance is Rs ${Balance}`);
        this._deposit=Balance
    }

    getbalance(name:string):number{
        return this._deposit
    }
}


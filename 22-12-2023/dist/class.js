export class Deposit {
    constructor(details) {
        if (details) {
            this._name = details.name;
            this._deposit = details.Amt;
            this._bankname = details.bankname;
        }
    }
    // Getter and setter for _name
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    // Getter and setter for _deposit
    get deposit() {
        return this._deposit;
    }
    set deposit(value) {
        this._deposit = value;
    }
    // Getter and setter for _bankname
    get bankname() {
        return this._bankname;
    }
    set bankname(value) {
        this._bankname = value;
    }
    withdraw(withdrawAmount) {
        let Balance = this._deposit - withdrawAmount;
        console.log(`${this._name} withdrew Rs ${withdrawAmount}. Remaining balance is Rs ${Balance}`);
        this._deposit = Balance;
    }
    getbalance(name) {
        return this._deposit;
    }
}

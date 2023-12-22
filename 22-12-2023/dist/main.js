import { checkNumber, checkNumberNotNUmber } from "./function.js";
import { Deposit } from "./class.js";
const DepositBtn = document.getElementById("deposit");
if (DepositBtn)
    DepositBtn.addEventListener("click", storeDetails);
let customerdetails = {};
function storeDetails(event) {
    event.preventDefault();
    const name = document.getElementById('Name').value;
    const bankname = document.getElementById('bankName').value;
    let depositAmt = parseInt(document.getElementById('depositAmount').value);
    if (name && bankname && depositAmt) {
        if (checkNumber(depositAmt) && checkNumberNotNUmber(name, bankname)) {
            const userObj = new Deposit({ name: name, Amt: depositAmt, bankname: bankname });
            customerdetails[name] = userObj;
            clear();
        }
        else {
            alert("enter correct value");
            window.location.href = '../html/home.html';
        }
    }
    console.log(customerdetails);
}
function clear() {
    const nameInput = document.getElementById('Name');
    const bankNameInput = document.getElementById('bankName');
    const depositAmountInput = document.getElementById('depositAmount');
    if (nameInput) {
        nameInput.value = '';
    }
    if (bankNameInput) {
        bankNameInput.value = '';
    }
    if (depositAmountInput) {
        depositAmountInput.value = '';
    }
}
const withdrawbtn = document.getElementById("with");
if (withdrawbtn)
    withdrawbtn.addEventListener("click", withdrawAmt);
function withdrawAmt(event) {
    event.preventDefault();
    console.log(customerdetails);
    const name = document.getElementById('Name').value;
    const bankname = document.getElementById('bankName').value;
    let withdrawAmt = parseInt(document.getElementById('withdrawAmount').value);
    if (name && bankname && withdrawAmt) {
        if (checkNumber(withdrawAmt) && checkNumberNotNUmber(name, bankname)) {
            const userobj = customerdetails[name];
            userobj.withdraw(withdrawAmt);
            console.log(customerdetails);
        }
        else {
            alert("enter correct value");
            window.location.href = '../html/home.html';
        }
    }
}

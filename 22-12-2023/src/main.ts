import { storeDetail } from "./interface.js";
import { checkNumber, checkNumberNotNUmber } from "./function.js";
import { Deposit } from "./class.js";
const DepositBtn=document.getElementById("deposit") as HTMLButtonElement

if(DepositBtn)
DepositBtn.addEventListener("click", storeDetails)

let customerdetails:{[key:string]:Deposit}={}
function storeDetails(event:Event){
    event.preventDefault()
    const name = (document.getElementById('Name') as HTMLInputElement).value;
    const bankname = (document.getElementById('bankName') as HTMLInputElement).value;
    let depositAmt = parseInt((document.getElementById('depositAmount') as HTMLInputElement).value);
    
    if(name && bankname && depositAmt){
        if(checkNumber(depositAmt) && checkNumberNotNUmber(name,bankname)){
            const userObj=new Deposit({name:name,Amt:depositAmt,bankname:bankname})
            customerdetails[name]=userObj
            clear()
        }
        else{
            alert("enter correct value")
            window.location.href='../html/home.html'
        }
    }
    console.log(customerdetails)
}

function clear() {
    const nameInput = document.getElementById('Name') as HTMLInputElement;
    const bankNameInput = document.getElementById('bankName') as HTMLInputElement;
    const depositAmountInput = document.getElementById('depositAmount') as HTMLInputElement;

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


const withdrawbtn=document.getElementById("with") as HTMLButtonElement

if(withdrawbtn) withdrawbtn.addEventListener("click", withdrawAmt)

function withdrawAmt(event:Event){
    event.preventDefault();
    console.log(customerdetails)
    const name = (document.getElementById('Name') as HTMLInputElement).value;
    const bankname = (document.getElementById('bankName') as HTMLInputElement).value;
    let withdrawAmt = parseInt((document.getElementById('withdrawAmount') as HTMLInputElement).value);

    if(name && bankname && withdrawAmt){
        if(checkNumber(withdrawAmt) && checkNumberNotNUmber(name,bankname)){
           const userobj=customerdetails[name]
           userobj.withdraw(withdrawAmt)
            console.log(customerdetails)
        }
        else{
            alert("enter correct value")
            window.location.href='../html/home.html'
        }
    }

}
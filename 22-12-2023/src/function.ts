export function checkNumber(n:number,n1?:number):boolean{
    if(arguments.length===2){
        if(!isNaN(n) && !isNaN(n1??0) ) return true
    }
    else {
        if(!isNaN(n)) return true
    }
    return false
}

export function checkNumberNotNUmber(str:string,str1:string):boolean{
    const alphabeticPattern = /^[a-zA-Z]+$/;

    const isAlphabeticStr1 = alphabeticPattern.test(str);
    const isAlphabeticStr2 = alphabeticPattern.test(str1);

    return isAlphabeticStr1 && isAlphabeticStr2;
}
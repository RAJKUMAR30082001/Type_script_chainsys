export function checkNumber(n, n1) {
    if (arguments.length === 2) {
        if (!isNaN(n) && !isNaN(n1 !== null && n1 !== void 0 ? n1 : 0))
            return true;
    }
    else {
        if (!isNaN(n))
            return true;
    }
    return false;
}
export function checkNumberNotNUmber(str, str1) {
    const alphabeticPattern = /^[a-zA-Z]+$/;
    const isAlphabeticStr1 = alphabeticPattern.test(str);
    const isAlphabeticStr2 = alphabeticPattern.test(str1);
    return isAlphabeticStr1 && isAlphabeticStr2;
}

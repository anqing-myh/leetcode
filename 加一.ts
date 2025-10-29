function plusOne(digits: number[]): number[] {
    if(digits[digits.length-1]!=9){
        digits[digits.length-1]+=1;
    }
    else{
        if(digits.length != 1){
            digits=plusOne(digits.slice(0,digits.length-1));
        }
        else digits=[1];
        digits.splice(digits.length,0,0);
    }
    return digits;
};
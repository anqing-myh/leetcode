function isPalindrome(x: number): boolean {
    let strx = String(x);
    for(let i = 0;i<=strx.length/2;i++){
        if(strx[i]!=strx[strx.length-i-1]){
            return false;
        }
    }
    return true;
};
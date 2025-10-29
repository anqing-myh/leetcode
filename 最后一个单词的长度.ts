function lengthOfLastWord(s: string): number {
    let k = 0;
    for(let i = s.length-1;i>=0;i--){
        if(s[i]!=' ')k+=1;
        if(k&&s[i]===' ')return k;
    }
    return k;
};
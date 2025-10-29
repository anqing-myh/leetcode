function reverse(x: number): number {
    let ax = String(x);
    let a = ax.split("");
    let b:string = "";
    if(x<0){
        a = a.slice(1,);
    }
    b = a.reverse().join("")
    if((Number(b)>2147483647&&x>0)||Number(b)>2147483648)return 0;
    if(x<0)return Number(b)*-1;
    return Number(b);
};
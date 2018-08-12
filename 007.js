function addString(string) {
    let length = string.length;
    let a = ""
    for (let k=length, t=0; k>0; k--,t++) {
        if (t%3===0 && t>2) {
            a =  ',' + string.slice(k, k+3) + a
            b = string.slice(0, k)
        }
    } 
    return b+a;
}
console.log(addString("01234567890123")) //01,234,567,890,123

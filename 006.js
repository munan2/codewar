function removeZeros(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === 0 || array[i] === "0") {
            for (let j = i; j< array.length; j++) {
                if (array[j] !== 0 && array[j] !== '0') {
                    [array[i], array[j]] = [array[j], array[i]]
                    if (j-i >1) {
                        for (let k=i+1; k<j; k++) {
                            [array[k], array[j]] = [array[j], array[k]]
                        }
                    }
                    break;
                }
            }
        }
    }
    return array
}
console.log(removeZeros(["0",null,0,"0",false]))
console.log(removeZeros(["0",0, "0",1]))
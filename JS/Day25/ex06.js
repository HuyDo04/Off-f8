
Array.prototype.filter2 = function(callback) {
    const newArray = [];    
    
    for(let i in this) {
        if(this.hasOwnProperty(i)) {
            const result = callback(this[i],i, this);
            if(result) {
                newArray.push(this[i]);
            }
        }
    }

    return newArray;
};

// Sample usage
const arr = [1, 2, 3 ,4, 5];
const result = arr.filter2((value) => {
    return value % 2 !== 0;
});

console.log(result); // [1, 3, 5]


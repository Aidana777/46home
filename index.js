
function myJoin(arr, separator) {
    const newArr=arr.join('')
    return arr
}

console.log(myJoin(["h", "t", "m", "l"], "")); 
console.log(myJoin(["Peter", "Parker"], " "));

function mySlice(arr, start, end) {
    const numElem=arr.splice(0,2)
    return arr
  
}

console.log(mySlice([45, 50, 76, 102], 1, 3)); 
console.log(mySlice([45, 50, 76, 102], 1)); 


function reverse(arr) {
    const numReverse=arr.reverse();
    return arr
}

console.log(reverse([1, 2, 3, 4])); 
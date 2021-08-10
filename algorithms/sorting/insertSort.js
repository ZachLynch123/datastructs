// use selection sort algorithm to sort array

let sortedArray = []
let unsortedArray = [5, 6, -1, 1, 3];


const minAndRemove = (array) => {
    let min = array[0];
    let minIndex = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }
    array.splice(minIndex, 1);
    return min;
}

const selectionSort = (array) => {
    let newMin;
    let sorted = [];
    while (array.length != 0) {
        newMin = minAndRemove(array);
        sorted.push(newMin);
    }
    return sorted;
}
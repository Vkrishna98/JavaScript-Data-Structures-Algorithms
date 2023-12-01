//O(n)-operation
function logItems(n) {
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
            console.log(i, j);
        }
    }
    for (let k = 0; k < n; k += 1) {
        console.log(k);
    }
}

// logItems(10);

//O(1)-operation
function addItems(n) {
    return n + n + n;
}

// console.log(addItems(3));

//O(log n)
// Divide and rule

let myArray = [11, 3, 23, 7, 17];
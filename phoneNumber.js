const createPhoneNumber = (arr) => {
    arr.splice(0, 0, '(');
    arr.splice(4, 0, ')');
    arr.splice(5, 0, ' ');
    arr.splice(9, 0, '-');
    let solution = arr.join('');
    return solution;
}

let numberArr = [8, 0, 1, 8, 6, 7, 5, 3, 0, 9];
console.log(createPhoneNumber(numberArr));
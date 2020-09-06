// Code your solution here!
function printString(myString) {
    console.log(myString[0])
    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    } else {
        return true
    }
}

function reverseString(str) {
    return str ? reverseString(str.substr(1)) + str[0] : str;
}

function isPalindrome(str) {
    let first = str[0]
    let last = str[str.length - 1]
    let middle = str.substring(1, str.length - 1)
    if (str.length < 2) {
        return true
    } else {
        if (first === last) {
            return isPalindrome(middle)
        } else {
            return false
        }
    }
}

function addUpTo(arr, ind) {
    if (ind === 0) {
        return arr[0]
    } else {
        return arr[0] + addUpTo(arr.slice(1, arr.length), ind - 1)
    }
}

function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0]
    } else {
        if (arr[0] < arr[1]) {
            return maxOf(arr.slice(1, arr.length))
        } else {
            arr[1] = arr[0]
            return maxOf(arr.slice(1, arr.length))
        }
    }
}

function includesNumber(arr, num) {
    if (arr[0] === num) {
        return true
    } else if (arr.length > 1) {
        return includesNumber(arr.slice(1, arr.length), num)
    } else {
        return false
    }
}
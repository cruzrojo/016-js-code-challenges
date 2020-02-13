// // ES6 code goes here
function brainNotWorking(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}
console.log(brainNotWorking([1, 2, 3, 4, 7]))

function brainSortofWorking(numbers) {
    let i = 0
    let sum = 0
    while (i  < numbers.length) {
        sum = sum + numbers[i]
        i++
    }
    return sum
}
console.log(brainSortofWorking([1, 2, 3, 4, 7]))

function brainIsWorking(poopyNums) {
    let a = 0
    let bongo = 0
    do  {
        bongo = bongo + poopyNums[a]
        a++
    } while (a  < poopyNums.length)
    return bongo
} 

console.log(brainIsWorking([1, 2, 3, 4, 5]))

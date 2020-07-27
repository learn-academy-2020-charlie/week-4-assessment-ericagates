// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// create a function that takes in an array
const shuffleRemaining = (array) => {
    // if the array is empty, return "the array is empty"
    if (array.length === 0){
        return "The array is empty."
    } else {
        // create a new array to store updated array
        let newArray = array
        // remove the first item from the array
        newArray.shift()
        // shuffle the remaining items in the array
        // starting from the last index in the array, and going down
        for(let i = newArray.length - 1; i > 0; i--){
            // create and store a random number to identify the index that will be swapped with the current index
            let j = Math.floor(Math.random() * i)
            // temporarily store the number in the current index
            let temp = newArray[i]
            // replace the number in current index with the number in index j
            newArray[i] = newArray[j]
            // replace the number in index j with the number stored in temp
            newArray[j] = temp
          }
        return newArray
    }
}

let collections2  = shuffleRemaining(collections)
console.log(collections2)
let collections3 = shuffleRemaining(collections2)
console.log(collections3)
console.log(shuffleRemaining(collections3))

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// create a function that takes in an array
const cubeSum = (array) => {
    // create a variable to store each item in the array cubed, and add it together
    let sumCubed = 0
    // map through each item in the array and turn it into a number cube it, and add it to sumCubed
    array.map(value => {
        sumCubed += parseInt(value)**3  
    })
    return sumCubed
}


console.log(cubeSum(cubeAndSum1))
console.log(cubeSum(cubeAndSum2))



// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// create a function that takes an array of numbers
const minAndMax = (array) => {
    // create a new array to store min and max number
    let newArray = []
    //initially set the minimum and max values to the first item in the array
    let minValue = array[0]
    let maxValue = array[0]
    
    // filter through each item in array to find if it's less than the current min value
    array.filter(value => {
        if (value < minValue){
            // if current value is less than the min value reset the min value
            minValue = value
        }
        return minValue
    })

    // filter through each item in array to find if it's greater than the current max value
    array.filter(value => {
        if (value > maxValue){
            // if current value is less than the max value reset the max value
            maxValue = value
        }
        return maxValue
    })

    //push min value to new array
    newArray.push(minValue)
    //push  max value to new array
    newArray.push(maxValue)

    return newArray
}

console.log(minAndMax(nums1))
console.log(minAndMax(nums2))




// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

// create a function that takes in a string
const oddCaps = (string) =>{
    let newString = string
    // loop through the string odd indexes of the string
    for (let i = 1; i < newString.length; i = i+2) {
        // update the character with the odd index Capitalized
        newChar = newString.charAt(i).toUpperCase()
        // add the new character by slicing the string at the index location
        newString = newString.slice(0, i) + newChar + newString.slice(i+1)
    }
    return newString
}

console.log(oddCaps(testString1))
console.log(oddCaps(testString2))




// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//create a function that accepts 2 arrays
const noDupes = (array1, array2) => {
    let noDupesArray = []

    //map through first array and make sure there are no duplicates
    array1.map((value, index) => {
        // if the current index is the first occurrence (or first index) of the value in the array, add it to the noDupesArray
        if (array1.indexOf(value) === index) {
            return noDupesArray.push(value) 
        }
    })

    //map through second array and compare to no Dupes Array
    array2.map(value => {
        // if the current value does not have an index (doesn't exist = -1) in the noDupesArray, add it to the array
        if (noDupesArray.indexOf(value)  < 0) {
            return noDupesArray.push(value)
             
        }
    })
    return noDupesArray
}

console.log(noDupes(arr1,arr2))
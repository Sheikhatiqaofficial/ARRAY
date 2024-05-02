// ARRAYS ARE VARIABLES WHICH CAN HOLD MORE THAN ONE VALUE OF DIFFERENT TYPES:

let foodName = ["Pasta", "Maggi", "Shrimp", "Steak", "Tacos", "Ramen"]
let carName = ["Bugatti", "Audi", "Ferrari", "BMW", "Mc LarenP1", "Lamborghini"]
//     0         1         2        3         4            5
console.log(foodName);

// ACCESSING THE VALUE:

console.log(foodName[1]);
console.log(foodName[4]);
//                            :METHODS:

// (1)   length    (tell the length of array without any interuption of index number)

console.log("The length of the array is", foodName.length);

// (2)   toString    (convert an array to a string of comma seprated values)

let string = foodName.toString();   //array is now a string
console.log(string);

// (3)   join    (join all the array's elements using a seprator)

let join = carName.join(" and ");
console.log(join);

// (4)   pop    (removes last element of array or update the original array and also returns the popped value)

carName.pop()
console.log(carName);
//  ---return---
let carName1 = carName.pop()
console.log(carName, carName1);

// (5)    push    (modifies the original array and return new array length)

carName.push("Mc LarenP1")
console.log(carName);
//  ---return---
let carName2 = carName.push("Lamborghini")
console.log(carName, carName2);

// (6)    shift    (removes first element of array and also returns it)

carName.shift()
console.log(carName);
//  ---return---
let carName3 = carName.shift()
console.log(carName, carName3);

// (7)    unshift    (add new element at the begining of array and return new array length)

carName.unshift("Audi")
console.log(carName);
//  ---return---
let carName4 = carName.unshift()
console.log(carName, carName4);

// (8)    concat    (used to join array to the new array and returned new array it does'nt change existing array)

let carName5 = carName.concat(foodName)
console.log(carName5);

// (9)    sort    (used to sort an array alphabetically)

carName.sort()
console.log(carName);

// (10)    reverse    (reverse the elements in the source array)

foodName.reverse()
console.log(foodName);

// (11)    splice    (can be used to add new items to an array and returns deleted items and modfies the array)

foodName.splice(1, 4, "Cake", "Fruits", "Lasania", "Kimchi")
console.log(foodName);
// ---return---
let carName6 = carName.splice(0, 2, "Jaguar", "Porsche")
//start from,to how many index,deleted or given item  
console.log(carName6);
console.log(carName);

// (12)    slice    (slices out a piece from an array and create a new array)

let carName7 = carName.slice(2, 4)
//   from where(index) , to where(index) last index will not be counted
console.log(carName7);

//                                                       ---OPERATOR---

// (1)    delete    (Array elements can be deleted using the delete operators, its just modifies the array  by letting the index number counting remaining same)

delete foodName[3]
console.log(foodName);


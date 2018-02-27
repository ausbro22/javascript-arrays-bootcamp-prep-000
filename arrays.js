var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newArray = array.unshift(element)
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = array.unshift(element)
  return newArray
}
function addElementToEndOfArray(array, element){
  var newArray = array.push(element)
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function removeElementFromEndOfArray(array) {
var newArray = array.shift();
return newArray;
}
function destructivelyRemoveElementFromEndOfArray(array){
array.slice(0, array.length - 1)
console.log(array)
}
function accessElementInArray(array, index){
 console.log(array[index]) 
}
function addElementToBeginningOfArray(array, element) {
  
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  [element, ...chocolateBars]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
function removeElementFromEndOfArray(array) {
array.slice(0, array.length - 1);
return array;
}
function destructivelyRemoveElementFromEndOfArray(array){
array.pop()
return array
}
function accessElementInArray(array, index){
 console.log(array[2]) 
}
function removeElementFromEndOfArray(array, element) {
  array.shift()
  return array
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  [element, ...array]
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
 return array[index] 
}
function removeElementFromBeginningOfArray(array) {
  array.slice(0)
  return array
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
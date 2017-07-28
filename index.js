module.exports = (array) => {
  if (!array) return Error('An array is required to truncate.');
  let firstElements = findFirstElements(array);
  let arrayToUpdate = array;
  let occurrences = 0;

  while(hasDuplicates(firstElements)) {
    occurrences++;
    arrayToUpdate = removeFirstElements(arrayToUpdate);
    firstElements = findFirstElements(arrayToUpdate);
  }

  return array.map((a) => a.substring(0, (occurrences + 1) || a.length));
};

const findFirstElements = array => array.map((a) => a[0] || null);

const removeFirstElements = array => array.map((a) => a.substring(1));

const hasDuplicates = (array) => {
  for(let i=0;i<array.length;i++) {
    if (array[i] === null) return false;
    if (getAllIndexes(array, array[i]).length > 1) return true;
  }
  return false;
}

const getAllIndexes = (arr, val) => {
  let indexes = [], i = -1;
  while ((i = arr.indexOf(val, i+1)) != -1){
    indexes.push(i);
  }
  return indexes;
}
let result = {};

const insertItem = (key, value) => {
  // insertItem the property with key and value into result
  result[key] = value;
  //return key;
};

const deleteItem = (key) => {
  // remove the property with key from result
  delete result[key];
  return key;
};

const lookupItem = (key) => {
  if (result.hasOwnProperty(key)) {
    return result[key];
  }
  return key;
};

const printItems = () => {
  console.log(Object.keys(result).join(", "));
};

insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");
console.log(result);
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");
console.log(result);
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'Item does not exist'

const test = [1, 2, 3, 4, 5];

/// /////////////////////////////////////
// Sum of list using a for loop
function sumFor(data) {
  let total = 0;
  for (const val of data) {
    total += val;
  }
  return total;
}
console.log(sumFor(test));

/// /////////////////////////////////////
// Sum of list using a while loop
function sumWhile(data) {
  let whileTotal = 0;
  let i = 0;
  while (i < data.length) {
    whileTotal += data[i];
    i++;
  }
  return whileTotal;
}
console.log(sumWhile(test));

/// /////////////////////////////////////
// Sum of list using recursion
function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumRecursion(data.slice(1, data.length));
}
console.log(sumRecursion(test));

/// /////////////////////////////////////
// Sum of list using Js underscore
function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(test));

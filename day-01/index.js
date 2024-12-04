// IMPORTS
import { getInput } from "../utilities/index.js";
import path from "path";
import { fileURLToPath } from "url";

// GET DIR
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DATA
const data = getInput(__dirname);
const dataSample = `3   4
4   3
2   5
1   3
3   9
3   3`;

// PROGRAM

// split data into left and right arrays
function createArrays(input) {
  // split the text by row, then split each row into a nested array and convert each string to a number
  const splitData = input
    .split("\n")
    .map((row) => row.split(/\s+/).map(Number));

  // create left and right arrays
  const left = [];
  const right = [];

  // iterate each row and push it into the correct array
  for (const [a, b] of splitData) {
    left.push(a);
    right.push(b);
  }

  return [left, right];
}

function solution1(input) {
  // destructure array from createArrays
  const [left, right] = createArrays(input);

  // sort arrays
  const sortedLeft = left.toSorted();
  const sortedRight = right.toSorted();

  // create the distances array and push the distance between each pair in
  const distances = [];
  for (let i = 0; i < sortedLeft.length; i++) {
    distances.push(Math.abs(sortedLeft[i] - sortedRight[i]));
  }

  // total all distances in the array
  return distances.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

function solution2(input) {
  // destructure array from createArrays
  const [left, right] = createArrays(input);

  // create object to hold occurences of numbers in right array
  const rightCounts = {};

  // for every number in the right array
  for (const num of right) {
    // if the number isn't already in the rightCounts object then set the value of that number to 0
    if (rightCounts[num] === undefined) {
      rightCounts[num] = 0;
    }
    // add 1 to the value of that key
    rightCounts[num]++;
  }

  return rightCounts;
}

console.log(solution2(data));

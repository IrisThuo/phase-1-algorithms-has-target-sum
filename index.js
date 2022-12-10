function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i<array.length; i++){
    let pairs = target - array[i]
  for(let k=0; i<array.length; k++){
    if(array[k] === pairs)
    return true
  }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
 0(n)
  */

/* 
  Add your pseudocode here
    check for array
    check if any numbers i array match up to criteria
    return required boolean if so
   
*/

/*
  Add written explanation of your solution here
      my function loops through the array checking for pairs that might lead to the target

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

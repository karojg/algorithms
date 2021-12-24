/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let prevValue = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[prevValue] != nums[i]) {
      prevValue++;
      nums[prevValue] = nums[i];
    }
  }

  return prevValue + 1;
};

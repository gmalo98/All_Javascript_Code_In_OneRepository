/*Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]*/

const nums = [2, 7, 2, 4];
const target = 9;
const map = new Map();
const twosum = [];

for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
        twosum.push(map.get(complement));
        twosum.push(i);
        break;  // Stop after finding one pair
    }
    if (!map.has(nums[i])) {  //  prevents overwriting first occurrence
        map.set(nums[i], i);
    }
}

console.log(twosum);  



/*Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.*/

const haystack = "adbutsans";
const needle = "sad";


// var strStr = function(haystack, needle) {
//         return haystack.indexOf(needle);
// };

//without using function
const flag=false;
function strStr(haystack, needle) {
    if (needle.length === 0) return 0;

    for (let i = 0; i <= haystack.length; i++) {
        let match = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }
        if (match) return i;
    }

    return -1;
}
     



console.log(strStr(haystack,needle))
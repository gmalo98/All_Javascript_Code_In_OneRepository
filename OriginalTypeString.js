/*Example 1:
Input: word = "abbcccc"
Output: 5
Explanation:
The possible strings are: "abbcccc", "abbccc", "abbcc", "abbc", and "abcccc".
Example 2:
Input: word = "abcd"
Output: 1
Explanation:
The only possible string is "abcd".
Example 3:
Input: word = "aaaa"
Output: 4*/



const word="abcd";
var possibleStringCount = function(word) {
    if(word.length===0)
    return 0;
    let count=1;
for(let i=1;i<word.length;i++){
    if(word[i]===word[i-1]){
        count++
    }
}
return count;
};
console.log(possibleStringCount(word));
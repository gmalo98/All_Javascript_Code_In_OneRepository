// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const strs= ["flower"];
if (strs.length === 0) {
    console.log("Empty");
} else {
let word=strs[0];
for(let i=1;i<strs.length;i++){
   while(!strs[i].startsWith(word))
    word=word.slice(0,word.length-1);
  if (word === ""){
    console.log("No Match");
    break;
  }
}
console.log(word);
}


// print vowels are present in the strings 

const str="Hll my nm s Gnsh";
const arr=[];
const vowels='AEIOUaeiou';

for(let i=0;i<vowels.length;i++){
    if(str.includes(vowels[i]))
        arr.push(vowels[i]);
}
console.log(arr);


/*Time complexity -O(n)*/


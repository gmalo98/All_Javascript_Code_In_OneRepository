/*remove duplicate number from an array arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 4];
output-[0, 1, 2, 3, 4];
*/

//process-1 : using set operator

const arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 4];
const set=new Set(arr)
console.log([...set]); //[ 0, 1, 2, 3, 4 ]

//time complexity O(n)

//process-2 : using empty array


const newarr=[];
for(let i=0;i<arr.length;i++){
    if(!newarr.includes(arr[i])){
     newarr.push(arr[i]);
    }
}
console.log(newarr); //[ 0, 1, 2, 3, 4 ]

//time complexity O(n²)

//process-3 : using lastIndexof 

const newarraytwo=[];
for(let i=0;i<arr.length;i++){
    if(arr.lastIndexOf(arr[i])===i)
    newarraytwo.push(arr[i]);
}
console.log(newarraytwo); //[ 0, 1, 2, 3, 4 ]

//time complexity O(n²)

//process-4 : using map

const map=new Map();
for(let i=0;i<arr.length;i++){
    if(!map.has(arr[i]))
        map.set(arr[i],i);
}
const arrfromMap=Array.from(map.keys());
console.log(arrfromMap); //[ 0, 1, 2, 3, 4 ]

//Time Complexity: O(n)


/*When performance matter use set and map to  remove duplicate element from an array*/
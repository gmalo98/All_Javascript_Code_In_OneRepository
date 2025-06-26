// arr = [0, 0, 1, 1, 2, 2, 3, 3, 8, 4, 4, 9];
// output-8 9

const arr=[0, 0, 1, 1, 2, 2, 3, 3, 8, 4, 4, 9];
const map=new Map();


//process:1
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i]))
      map.set(arr[i], map.get(arr[i]) + 1);
   else
    map.set(arr[i],1);
}

for(let [key,value] of map){
    if(value===1){
        console.log(key);
    }
}

//process:2

for(let i=0;i<arr.length;i++){
if(arr.indexOf[arr[i]===arr.lastIndexOf(arr[i])])
    console.log(arr[i]);
}


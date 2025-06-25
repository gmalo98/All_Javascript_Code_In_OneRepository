//Remove extra space from a string 

const str="Ganesh   Malo  Lives      In kalna";

const arr=str.split(" ").filter(Boolean).join(" ");
    console.log(arr.toString());

/*Time complexity O(n)*/

const cleaned = str
  .split(" ")
  .filter(val => val !== "") 
  .join(" ");

  console.log(cleaned);

  /*Time complexity O(n)*/

  //Remove without function
  const arr1=str.split(" ");
  let st="";
  for(let i=0;i<arr1.length;i++){
    if(arr1[i]!=""){
    st=st+arr1[i]+" ";
    }
  }
//const str1=st.toString().replaceAll(',',' ');
 console.log(st.trim().length);


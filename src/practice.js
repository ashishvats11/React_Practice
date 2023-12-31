
//1. map()
const number =[1,2,3,4,5];
console.log(number);
const doubledNumber = number.map(num=> num*2);
console.log(doubledNumber);

// 2. filter()
const arr1 = [1,2,3,4];
console.log(arr1);
const newArr1 = arr1.filter(num=>num>2);
console.log(newArr1);

//3. reduce()

const arr2 = [1,2,3,4]
console.log(arr2);
const sum = arr2.reduce((sum,num)=>sum+num,0);
console.log(sum)

// 4. forEach()
const arr3 = [1,2,3,4];
arr3.forEach(element => {console.log(element)});

//5. slice

const arr4 = ["Ashish","Palak","Kartikey"];
console.log(arr4.slice(0,1));

//6. sort
const arr5 = [5,6,3,4,2,7,1]
console.log(arr5.sort());

//7. reverse()

console.log(arr3.reverse())

//8. Sort using comparioson function

const data = [{name:"Ashish Vats",age:21,dob:'2002-06-10'},{name:"Palak Garg",age:22,dob:'2002-02-07'},{name:"Kartikey Khanna",age:23,dob:'2000-07-12'}]
// console.log(data);
console.log(data.sort((a,b)=>{
    return(
        // a.age - b.age  //ascending order
        b.age - a.age  //descending order
    )
}));

//const greet = (name) => {
  //  return 'hello, ${name}!!';
//};
//console.log(greet("Ether"));
// const obj = {
//     name: "Etherion",
//     reguralFunction: function(){
//         console.log(this.name+"luffy")
//     },
//     arrowfunction: ()=>{
//         console.log(obj.name+"boa")
//     }
// };
// obj.reguralFunction();
// obj.arrowfunction();

// const numbers = [1,2,3];
// const morenumbers=[4,5,6];
// const allNum=[...numbers,...morenumbers];
// console.log(allNum)
// const extended  = [0,...numbers,...morenumbers];
// console.log(extended);

// const numbers=[1,2,3];
// const maxnumbers = Math.min(...numbers);
// console.log(maxnumbers);

// const person = {name: "luffy", age:19};
// const age=[19];
// updatedperson ={...person,age:19};
// console.log(updatedperson);
// const person1 = {...person, city:"tokyo"};
// console.log(person1);
// const numbers =[1,2,3];
// const [n,,c1]=numbers;
// console.log(n,c1);

// const [a,b,c]=numbers;
// console.log(a,b,c);

// const numbers = [1,2,3,4,5,6];
// const evenNumbers = numbers.filter(num=>num>2);
// console.log(evenNumbers);

const numbers =[1,2,3,4,5,6,7,8,9,10];
const squaredNumber = numbers.map(num=>num*num);
console.log(numbers.filter(num=>num%2==0));
console.log(squaredNumber);
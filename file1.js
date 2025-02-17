///////////////////////////////////////////////////// Sychronous programming/////////////////////////////////////////////////

// IMP NOTE : js is a Synchronous and singl threaded programming language

// what we mean by sychronous programming --> it mean by line by line step by stem
// Eg:

// console.log("Script start"); //1st execution

// for (let i = 0; i < 10000; i++) {
//   console.log("Inside the loop"); //2nd execution
// }

// console.log("Script end"); //3rd execution

// what is happning here is : the other code will not execute if its previous execution is not completed it wont
// matter how much time it taking to execute while the next execute will only take one MiliSec

//////////////////////////////////////////////////////// Asychronous programming /////////////////////////////////////////////////////

// As far we know that Js is a Sychrononus programming language but with the help Of (SetTimeOut)
//  we can achieve behaviour of Asychoronus programming language

// SetTImeOut: This function is not a part of JS it is provided by the browsser

// eg:

// console.log("Script Start");

// function hello() {
//   console.log("Hello world!!");
// }

// setTimeout(hello, 2000); //it take 2 parameter (function-name, numberInMiliSec)

// console.log("Script End");

///Output:
// Script Start
// Script End
// Hello world!!

// console.log("    ");
// console.log("Script Start");

// setTimeout(()=>{
//     console.log("Inside set time out!!");
// },1000)

// for(let i=0;i<100;i++){
//     console.log("...");
// }

// console.log("Script End");

////////// Output

// Script Start
// Script End

// Script Start
// 51 ...
// Script End
// Inside set time out!!
// Hello world!!

// veryImp: accordint to this output sequence we can conclude that the webBrowser start is execution after script export default function first(second) {third}
// web browser is execution it parllely

//////////////Id of setTime Out

// we can stop or clear the setTime value or execution

///Clearing SetTimeOut with the help  of id :

console.log("New Start");
const id = setTimeout(() => {
  console.log("Clear value");
}, 1000);

console.log("Id is : ", id);
clearTimeout(id); //clearing operation : the callBack function will be dequeue from the callBack queue

console.log("Script End");

///output

// New Start
// Id is :  1
// Script End

////////////////////////////////////////////////// setInterval//////////////////////////////////////////////////////

// It is same as setTimeout but the main difference is setTimeout execute once but in setInterval it execute
//  after given time one by another
// eg:

console.log("                  ");

console.log("Start Script");

setInterval(() => {
  // console.log("Hi");
}, 1000);

console.log("Script End");

// output
// Start Script
// Script End
// 10 Hi

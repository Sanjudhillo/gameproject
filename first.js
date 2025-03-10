// const product = {
//     name :"ball pen",
//     rating : 4,
// offer:5,
// price:270,
// isdeal: true
// }
// console.log( typeof product["isdeal"])
// num =89;
// if(num % 2===0){
//     console.log(num,"is even");
// }
// else{
//     console.log(num,"is odd")
// }
//ternary operator
// let age =35;
//  let result = age >18 ?"adult":"not adult";

// let number = prompt("enter a number: ");
// if(number%5==0){
//     console.log(number,"multiple of 5");
// }
// else{
//     console.log(number,"not multiple of 5");
// }

// num = prompt("enter a number");
// if(num>=90 &&num<=100){
//     console.log("student get grade A");
// }else if(num>=70 && num<=89){
//      console.log("student get grade B")
// }else if(num>=60 && num<=69){
//      console.log("student get grade C")
// }else if(num>=50 && num<=59){
//      console.log("student get grade D")
// }else{
//      console.log("student get grade F")
// }
// let sum=0;
// for (let i =0; i<=10;i++){
//     sum+=i;
// }
// console.log(sum);
//for-of loop

// let str = "apna college";
// let size =0;

// for(let i of str ){
// console.log("i is :", i);
// size++;
// }
// console.log(size);
// for in loop(for print keys in objects)
// const student ={
//     name:"sanju",
//     roll : 35,
//     cgpa :8.00,
//     ispass : true
// }
// for(let i in student){
//     console.log(i,"=", student[i] );
// }

//print even unmbers from 0 to 100

// for(let i =0; i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// let gameNum = 25;
// let userNum = prompt("guess the game number:");
// while(userNum != gameNum){
//     console.log("not the correct number");
//     userNum = prompt("guess the game number:");
// }
// console.log("congratulatioins!!");

// let sum=0;
// let marks = [45,56,78,98,82];
// for(let value of marks){
//    sum +=value
// }
// let avg = sum/marks.length;
// console.log(`average marks is : ${avg}`);
// let items =[122,234,345,421,230];
// for(let i=0;i<items.length;i++){
// let offer = items[i]/10;
// items[i]-=offer;
// }
// console.log(items);
// arr1=["ruma","dhillon"];
// arr2=["sanju","dhillon"];
// let combine = arr1.concat(arr2);
// console.log(combine);

// let arr = [1,2,3,4,5,6];
// arr.splice(3,1,101);
// let companies = ["Bloomberg","Microsoft","Uber", "Google","IBM","Netflix"];
// companies.shift();
// companies.splice(1,1,"Ola");
// companies.push("Amazon");

// function my_func( x,  y){
//    sum= x+y;
//    return sum;
// }
// my_func(44,58);
// console.log(sum);
// const arrowSum = (a,b) =>{
//     return a+b;
// }
// function printString(string){
    
//     for(let str of string){
//         if(str =="a" || str=="e" || str == "i" || str=="o" || str =="u"){
//             count++;
//         }
        
//     }}
//     let count = 0;
//     printString("dhillon");
// let arr = ["a","b","c","d"];
// arr.forEach((value,idx,arr) => {
//     console.log(value.toUpperCase(),idx,arr);
// })
//for each used for traverse all value and print 
// let arr = [2,3,4,6,8];
// arr.forEach((value) =>{
// console.log(value **2);
// })
//map function used for creating new array and filter gives some condition values 
// let num=[2,3,4,6];
// let newArr = num.filter((value) =>{
//     return value % 2==0 ;
// })
//reduce function for max. number
// let arr= [12,45,148,34,86];
// let output = arr.reduce((prev,curr) =>{
//      return prev>curr ? prev : curr;
// })
// let marks = [80,56,89,90,92,94];
// let result =  marks.filter((value)=>{
//     return value>=90;
// })
// let number = prompt("enter a number");
// let arr=[];
// for(let i=1; i<=number;i++){
// arr[i-1] =i;
// }
// console.log(arr);
// let sum = arr.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log(sum);

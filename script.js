// let heading = document.getElementById("heading");
// console.dir(heading);

// let elements= document.querySelector("p");
// console.dir(elements);
// let allElements= document.querySelectorAll(".myClass");
// console.dir(allElements);

// let div = document.querySelector("div");
// console.dir(div);
// let heading = document.querySelector("h1");

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText += "from apna college !!";
// let elements = document.getElementsByClassName("class");
// console.dir(elements);
// let div = document.querySelector("div");
// console.log(div);
// // console.log(divs[0]);
// // divs[0].innerText = "new unique value 1";
// let idx=1;
// for(div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }
// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);
// let para = document.querySelector("p");
//     console.log(para.setAttribute("class","new class"));
// //     console.log(para.getAttribute("class"));
//  let div = document.querySelector("div");
// console.log(div);
// div.innerText="komal";
// div.style.backgroundColor= "red";
// div.style.fontSize = "26px";
// div.innerText = "hello!";
// let newButton = document.createElement("button");
// newButton.innerText = "click here";
// console.log(newButton);
//div.append(newButton);
//div.prepend(newButton);
// let p = document.querySelector("p");
// console.log(p);
// p.after(newButton);
// p.style.fontSize="25px";
// let newHeading = document.createElement("h1");
// newHeading.innerHTML= "<i>thank you!!</i>";
// document.querySelector("body").after(newHeading);
//newHeading.remove();
// let newButton = document.createElement("button");
// newButton.innerText = "click me!!";
// newButton.style.backgroundColor =  "red";
// newButton.style.Color= "white";
// console.log(newButton);
// let body = document.querySelector("body");
// body.prepend(newButton);
// console.log(newButton);
// let para = document.querySelector("p");
// console.log(para);

 let modeBtn = document.querySelector("#mode");
// btn1.onclick= (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//     console.log("button was clicked");
// }
// let div= document.querySelector("div");
// btn1.addEventListener("click",() =>{
//     console.log("hello - Handler1");
// });
// btn1.addEventListener("click",() =>{
//     console.log("hello - Handler2");
// });
// const handler3 = ()=>{
//     console.log("hello - Handler3");
// }
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",() =>{
//     console.log("hello - Handler4");
// });
// btn1.removeEventListener("click",handler3); 
let body = document.querySelector("body") ;    
let currMode = "light";
modeBtn.addEventListener("dblclick", ()=>{
    if(currMode ==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});

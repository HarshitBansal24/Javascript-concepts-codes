//!NAMED FUNCTION
// function hello(){
//     console.log("hello");
// };
// hello(); 

//!FUNCTION ANONYMOUS
// function (){
//     console.log("hello");
// };



//!FUNCTION WITH EXTENSION
// var x = function (){
//     console.log("hello");
// };
// x();


//!ARROW FUNCTION
// let app = ()=>{

//     console.log("i am arrow func");
// };
// app();

// let a1=(x,y)=>{
//     console.log(x);
// };
// a1(10);

// let a2 = (x,y)=>{
//     let sum=x+y;
//     console.log(sum);
// };
// a2(10,20);

//!ARRAY DESTRUCTURING
// let arr = [10, 20, 30];
// let [a, b, c] = arr;
// console.log(a, b, c);

// let arr2 = [1, 2, 3, 4, 5, 6];
// let [q, ,w, , ,p] = arr2;
// console.log(q, w, p);



//!WAYS TO CREATE OBJECT
// const obj={
//     name: "chombu",          //braces and literal way
//     age: 21,
// };
// console.log(obj);


// const obj2 = new Object({name:"tintin", age:21})     //with new and constructor
// console.log(obj2);


// function CreateObject(name, age, isWorking){
//     this.name=name;                              
//     this.age=age;
//     this.isWorking=isWorking;                  //with function and construtor

//     return this;
// }
// const obj3=new CreateObject("tintin", 21, false);
// console.log(obj3);


// class Car{
//     constructor(name, price, color){
//         this.name=name;
//         this.price=price;
//         this.color=color;                       //with class and constructor
//     }
// }
// const toyota=new Car("fortuner", 5500000, "white");
// console.log(toyota);



//!OBJECT DESTRUTURING
// let obj={
//    ename:"pankaj",
//    email: "user@gmail.com",
//    password: 12323,
// };
// console.log(obj.ename);
// console.log(obj.email, obj.password);


// let {email, password}=obj
// console.log(email, password);



//!ACCESS AN OBJECT
// const obj={
//     name: "tintin",
//     age: 21,
// };
// console.log(obj.name);     //dot(.) operator access
// console.log(obj["name"]);  //braces access


//!OBJECT METHODS
// const actor={
//     name: "prabhas",
//     age: 43,
//     dialogue: function(){
//         console.log("mrityu.......!");
//         return 'jhukega nahi';
//     }
// };
// const res=actor.dialogue();
// console.log(res);

 
// const user={
//     name: "tintin",
//     age:22,
//     userinfo: function(){
//         console.log('user name is ' +this.name);    
//         console.log('user age is ' +this.age);
//         console.log(this);
//     }
// };
// user.userinfo();


// const user={
//     name: "tintin",
//     age:22,
//     userinfo: ()=>{
//         console.log('user name is ' +this.name);        //problem
//         console.log('user age is ' +this.age);
//         console.log(this);
//     },
// };
// user.userinfo();


//!ADD IN OBJECT
// const obj={
//     name: "tintin",
//     age: 21
// };
// obj.state="delhi";
// console.log(obj);

// function meme(){
//     console.log("tu smjha...!");
//     console.log(obj.state);
// }
// obj.meme=meme();
// obj;


//!UPDATE OBJECT
// const obj={
//     name: "tintin",
//     age: 21
// };
// obj.age=16;
// console.log(obj);


//!DELETE OBJECT
// const obj={
//          name: "tintin",
//          age: 21
//      };                            //problem solved
//      delete(obj.age);
//      console.log(obj);

//!MAP
// let arr=[10,20,30,40,50,30];
//  let val=arr.filter((ele)=>{     
// console.log(ele);                     
//    return ele<=30;
//  });
// console.log(val);


 //!FILTER and FIND
//  let arr=[10,20,30,40,50,30];
//  let val=arr.filter((ele,i)=>{
//    console.log(ele);
//    return ele===30;
//  });
// console.log(val);

// let val2=arr.find((ele)=>{
//     return ele===30;
// });
// console.log(val2);


//!COPY OBJECT
// let obj={
//     name: "tintin",
//     age: 16                  //shallow copy
// };
// let obj_cpy=obj;
// obj_cpy.age=20;
// console.log(obj_cpy);
// console.log(obj);


// let obj1={
//     name: "tintin",
//     age:22
// };
// let obj2={};                     //DEEP COPY
// for(element in obj1){
//     obj2[element]=obj1[element];
// }
// console.log(obj2);
// obj2.channel="ON";
// console.log(obj2);
// console.log(obj1);


//!REST OPERATOR
// cart("maggie","pizaa","coldrink");
// function cart(...item){
//     console.log(item);
//     console.log(item[0]);
// }


// let movies=["php", "dhamal", "wlcm"];
// const [m1,...m3]=movies;                  //array with rest
// console.log(m3);



// const obj={
//     name: "tintin",
//     age: 23,
//     height: 5                    //obj with rest
// };
// const{name,...info}=obj;
// console.log(obj);
// console.log(name);
// console.log(info);



//!SPREAD OPERATOR
// const movies=["kalki", "bahubali", "rrr"];
// const singers=["arijit", "armaan", "jubin"];             //with array
// const actors=["prabhas", "rajkumar", "shraddha"];

// const totalcast=[...movies,...singers,...actors];
// console.log(totalcast);


// const mahadev={
//      father: "Ganesh ji",
//      husbandd: "Mata parvati",
//      nivas: "kailash"
// };

// const shreehari={
//     husbannd:"laxmimata",        with object
//     vahan: "sheshnag",
//     astra:"sudarshan"
// };

// const brahma={
//     husband: "sarasvati mata"
// };

// const tridev={...mahadev,...shreehari,...brahma};
// console.log(tridev);


//!ARRAYS WITH PUSH, POP, UNSHIFT, SHIFT
// const arr=[10,20,30,40];
// arr.push(50);                  //add element in the end
// console.log(arr);

// const arr2=["a", "b", "c", "e"];
// arr2.pop();                    //delete element from end
// console.log(arr2);

// const arr3=[20,30,40,50];
// arr3.unshift(10);             //add element in starting index
// console.log(arr3);

// const arr4=["d","a","b","c"];
// arr4.shift();                 //delete element from the starting index
// console.log(arr4);


//!ARRAYS WITH SPLICE AND SLICE
// const arr=[10,20,30,40,50];
// arr.splice(2,0,100,200,300);
// console.log(arr);                         
// arr.splice(3,1,500);
// console.log(arr);


// const arr=[10,20,30,40,50];
// const copy_elements=arr.slice(0,3);   //0to2 index copy slice method
// console.log(copy_elements); 

 //!INCLUDES METHOD IN ARRAY
//  let arr=[10,20,30,40,50];
//  console.log(arr.includes(30,2));  //true
//  let arr2=[10,20,30,40,50];
//  console.log(arr2.includes(30,3));  //false


//!Sort Array
// let arr=[10,2000,300,765,2,0];
// console.log(arr.sort((a,b)=>a-b));     //ascending order

// let arr2=[2000,3000,4,80,0,1,5000];   descnding order
// console.log(arr2.sort((a,b)=>b-a));

// let arr3=[0,0,0,0,0];
// console.log(arr3.sort((a,b)=>a-b));   not sorted



//!FOREACH IN ARRAY
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((val)=>{
//   if(val % 2 === 0)
//   {
//     console.log(`${val} is even number;`);
//   }
// });

              //OR

//   const arr2 = [1, 2, 3, 4, 5];
//   arr2.forEach(function(val){
//     if(val % 2 === 0)
//     {
//       console.log(`${val} is even number;`);
//     }
//   });     


//!MAP
// let arr=[10,20,30,41];
// let arr2=arr.map((value)=>{
//     if(value%2===0){
//         return value; 
//     }
// });
// console.log(arr2);
// console.log(arr);

//*OR

/* function hello(value){
    if(value%2===0){
        return value; 
    }
}
let arr2=arr.map(hello);
console.log(arr2);
console.log(arr); */


//!FILTER
/* let arr=[
    {age: 10 , name: "harshit"},
    {age: 20, name: "harsh"},
    {age: 30, name: "har"},
    {age: 41, name: "harshitt"},
];
let arr2=arr.filter((x)=>{
    if(x.age>20){
        return x.name; 
    }
});
console.log(arr2); */


// let arr=[10,20,30,41];
// let arr2=arr.filter((value)=>{
//     return value>20;
// });
// console.log(arr2);


// let pookie=[20,456,0,12,9,87,1];
// let tu=pookie.filter((a)=>{
//     return a>12;
// });
// console.log(tu);


//!REDUCE
// let arr=[1,2,3,4];
// let arr2=arr.reduce((h1,h2)=>{
//     return h1+h2;
// });
// console.log(arr2);


//!ARRAY.ISARRAY()
// const arr=[10,20,30];
// console.log(Array.isArray(arr));


//!Array.from()
// let str="Harshit";
// console.log(Array.from(str));

//!JOIN MEHTOD:- The join() method in JavaScript is an essential tool for converting arrays into strings
// const arr=["sun", "mon"];
// const arr2=["tue", "wed"];
// const res1=arr.join(arr2);
// console.log(res1);    //result
// console.log(typeof(res1));    //string


//!FLAT METHOD

// const arr1=[1,[2,3],4,[5,[6,7],8],9,10];
// let res1=arr1.flat(1);                       //1 level
// console.log(res1);

// const arr=[1,[2,3],4,[5,[6,7],8],9,10];          //2 level
// const res=arr.flat(2);
// console.log(res); 


//!CONCAT METHOD
// const arr1=["hello", "Harshit"];
// const arr2=["Bansal", "sir"];
// const ans=arr1.concat(arr2);
// console.log(ans);

// const str1="Harshit";
// const str2="Bansal";
// const ans2=str1.concat(str2);
// console.log(ans2);
 


//!DOM....!

//* document.getElementById

    // let divone = document.getElementsById('itemone');
    // console.log(divone);                                       //->error in elements

//     let d = document.getElementById("itemone");
//     console.log(d);

//     let di = document.getElementsByClassName("item item2");
//     console.log(di);

//     let divs = document.getElementsByTagName("div");
//     console.log(divs); 

// divs[0].style.backgroundColor = "yellow";
// divs[0].style.padding = "10px";
// divs[0].style.display = "flex";
// divs[0].style.gap = "10px";
// divs[0].style.justifyContent = "space-between";

// for (let i = 1; i < divs.length; i++) {
//   divs[i].style.backgroundColor = "blue";

//   divs[i].style.fontSize = "32px";
//   divs[i].style.padding = "10px";
//   divs[i].style.color = "white";
// }
  

// let ele=document.querySelector("#parent>.item");
// ele.style.fontSize="32px";
// console.log(ele);

// let elem=document.querySelector("#parent>.item:last-of-type");
// elem.style.fontSize="32px";
// console.log(elem);

// const diva=document.querySelectorAll(".item");
// diva[2].textContent="Abra Ka Dabra"
// diva[2].style.color="red"

//*DOM:- PART 2

// const h1=document.createElement("h1");
// h1.textContent="jai shree ram";

// const body=document.body


// const list1=document.createElement("li");
// const list2=document.createElement("li");
// const list3=document.createElement("li");

// list1.textContent="HTML"
// list2.textContent="CSS"
// list3.textContent="JavaScript"

// const ul=document.querySelector("ul");
// ul.appendChild(list1);
// ul.appendChild(list2);
// ul.appendChild(list3);


//*FIRST SIBLING
// const p1=document.createElement("p");
// p1.textContent="Starting tag";
// const divs=document.getElementById("box");
// divs.insertAdjacentElement("beforebegin",p1);

// const p3=document.createElement("p");
// p3.textContent="middle tag1";
// const diva=document.getElementById("box");
// diva.insertAdjacentElement("afterbegin",p3);

// const p4=document.createElement("p");
// p4.textContent="middle tag2";
// const divi=document.getElementById("box");
// divi.insertAdjacentElement("beforeend",p4);

//*LAST SIBLING
// const p2=document.createElement("p");
// p2.textContent="Ending tag";
// const dive=document.getElementById("box");
// dive.insertAdjacentElement("afterend",p2);


// const first=document.createElement("p");
// const last=document.createElement("p");

// first.textContent="para 1";
// last.textContent="para 2";

// const divu=document.getElementById("box");
// divu.insertAdjacentElement("afterbegin",first);
// divu.insertAdjacentElement("beforeend",last);


//*DOM PART-3

// const p=document.getElementById("example");
// p.textContent=p.textContent+" im a web developer";
                 //or
//                  const p=document.querySelector("p");
//                  p.textContent=p.textContent+" im a web developer";

//Inner html:- Use innerHTML when you only want to replace the contents of the element.

// p.innerHTML="Hello I am <a href='' target='_blank'>Web Developer</a>"


//Outer html:- Use the outerHTML when you want to completely replace an element and its contents.
// const div=document.getElementById("example");
// console.log(div);

// div.outerHTML=`<section>
//                     <p>Ram Ram Bhai Sareyane..!!</p>
//                 </section>`


// let divs=document.getElementsByClassName("div1");           //SET ATTRIBUTE
// divs[0].setAttribute("id", "chombu");

// const divs=document.getElementById("example");
// if(divs.getAttribute("class")==="div1"){
//     console.log("matched");                            //GET ATTRIBUTE
// }
// else{
//     console.log("not matched");
// }


// const divs=document.getElementById("example");
// divs.removeAttribute("title");                         //REMOVE ATTRIBUTE


// const attribute=document.createAttribute("id");
// attribute.value="para";                                 //CREATE ATTRIBUTE
// const p=document.querySelector('p');

// const h1=document.querySelector("h1");
// h1.setAttribute("id", "root");


//DOM PART-4
// const p=document.getElementById("last")
// const element=document.querySelector("#parent>:first-child")



// p.addEventListener("mouseenter",()=>{
//     element.style.color="red"
// }); 



//! EVENTS INTRO

// 2.
// target the element
// const button=document.querySelector("button");

// set event listener
// button.onclick=changetext;

// function of operation
// function changetext(event){
//     console.log(event);
//     const h1=document.querySelector("h1");
//     h1.textContent="har har mahadev";
//     h1.style.color="darkblue";
//     h1.style.backgroundColor="skyblue";

//     const h2=document.querySelector("button");
//     h2.textContent="ab hath jod lo sab";
// };


// 3.
// const button=document.querySelector("button");

// button.addEventListener("click", handlebutton);

// function handlebutton(){
//     const body=document.body;
//     body.style.cssText="background-color:black;color:white";
//     const h1=document.querySelector("h1");
//     h1.textContent="learning js";
//     const h2=document.querySelector("button");
//     h2.textContent="";
//     h2.style.cssText="padding:0px;background-color:black";
// }

// keyboard events movements
// const box=document.getElementById("box")
// let lSide=100;
// let tSide=100;

// window.addEventListener("keydown",(e)=>{
//     let move=50;
//     switch (e.key) {
//         case "ArrowUp":
//             tSide=tSide-move;
//             break;
//         case "ArrowDown":
//             tSide=tSide+move;
//             break;
//         case "ArrowLeft":
//             lSide=lSide-move;
//             break;
//         case "ArrowRight":
//             lSide=lSide+move;
//             break;
//         default:
//             break;
//     }
//     box.style.left=lSide + "px";
//     box.style.top=tSide + "px"
// });

// keyboard events
// window.addEventListener("keydown", candle);

// function candle(light){
//     if(light.ctrlKey && (light.key==="D"||light.key==="d"))
//     {
//         light.preventDefault();
//         document.body.style.cssText="background-color:black;color:white;"
//     }
//     else if(light.ctrlKey && (light.key==="L"||light.key==="l"))
//     {
//         light.preventDefault();
//         document.body.style.cssText="background-color:red;color:black;"
//     }    
// };




// click

// const button=document.querySelector("button");


// button.onclick=first;

// function first(){
//     console.log("button left clicked...");
// };

// dblclick
// button.addEventListener("dblclick", ()=>{
//     console.log("jhukega nahii......");
// });


//* mousedown
// button.addEventListener("mousedown", ()=>{
//     console.log("mouse pressed...!");
// });


//* mouseup
// button.addEventListener("mouseup", ()=>{
//     console.log("amarendra BAHUBALI")
// });


//* mousemove
// button.addEventListener("mousemove", (e)=>{
//     if(e.clientX<38){
//        console.log('Turn curser to the right');
//     }
//     else if(e.clientX===38 && e.clientY===22){
//         console.log('Right position of cursor');
//     }
//     console.log(`Mouse Position X=${e.clientX} y=${e.clientY}`);
// });

//* mouseover and mouseenter
// button.addEventListener("mouseover",()=>{
//     document.body.style.cssText="background-color:#000"
//     console.log("Mouse is Hover")
// });


//* mouseout and mouseleave
// button.addEventListener("mouseout",(e)=>{
//     document.body.style.cssText="background-color:yellow"
//     console.log("mouse out");
// });


//!SUBSTRING
// let string="harshit";
// let arr=string.substring(0, string-1);
// console.log(arr);


//!SET-TIMEOUT
/* console.log("hello");
setTimeout(function(){
    console.log("hello print in 2 sec");
}, 2000);
setTimeout(function(){
    console.log("hello print in 4 sec");
}, 4000); */


//!SET-INTERVAL
/*
let count=1;
function dialog()
{
    console.log(`Yeaaaaaah! ${count++}`)
}

setInterval(dialog, 2000); */

/* let count=1
const id=setInterval(()=>{
    console.log(`Task-${count++}`)
},1000)

console.log(id)

clearInterval(id) */



//! JSON
/*const obj={
    name:"Chombu",
    age:24
}

// convert data into JSON
const json_obj=JSON.stringify(obj)
console.log(json_obj);

// Convert JSON data into JS
const js_obj=JSON.parse(json_obj)
console.log(js_obj);*/



/*const myFeature={
    feature:'Bubbles',
    data:200,
    details:{
        sender:200,
        status:'ok',
        receiver:205,
        status:'ok'
    },
    storage:['html','css','js'],
    display:null
}

const stringObject=JSON.stringify(myFeature)
console.log(stringObject);


const normalObject=JSON.parse(stringObject)
console.log(normalObject)*/


//! PROMISE
/*
let count=false;
const p1=new Promise(function(resolve,reject){
    if(count)
    {
        resolve("Async Task is Completed")
    }
    else{
        reject("Error")
    }
})

console.log(p1) */



/*const sapna="no";
const p2=new Promise((resolve,reject)=>{
    if(sapna==="yes")
    {
        console.log("She Replied")
        resolve("Sapna likes you..!")
    }
    else{
        console.log("She Rejected");
        reject("Sapna deserve better..!")
    }
})

p2
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(()=>{
    console.log("Vo stree h kuch bhi kar sakti h..!")
}) */



//! CALL APPLY BIND
//*CALL
/* const obj={
    name:"tinku",
    age:26
}

function getdetails(a,b,c){
    console.log('Username:' +this.name);
    console.log('Userage:' +this.age);
    console.log('a is:' +a);
    console.log('b is:' +b);
    console.log('c is:' +c);
}

getdetails.call(obj,10,20,30); */
 


/* const obj={
    name:"Tintin",
    age:22
}

function getDetails(city,pin){
    console.log(`User Name: ${this.name}`)
    console.log(`User age: ${this.age}`)
    console.log(`city: ${city}`)
    console.log(`Pin: ${pin}`)
}
getDetails.call(obj,"delhi",110032); */


//*APPLY
/* const obj={
    name:"dinga",
    age:23
}

function getDetails(city, pincode){
    console.log(`Username: ${this.name}`);
    console.log(`Username: ${this.age}`);
    console.log(`Userscity: ${city}`);
    console.log(`pincode: ${pincode}`);
}

getDetails.apply(obj,["delhi",110032]); */


//*BIND
/* const obj={
    name:"dinga",
    age:23
}

function getDetails(city, pincode){
    console.log(`Username: ${this.name}`);
    console.log(`Username: ${this.age}`);
    console.log(`Userscity: ${city}`);
    console.log(`pincode: ${pincode}`);
}

let result=getDetails.bind(obj,"delhi",110032); 
result(); */


//!String vs StringBuffer

// console.log("start");
// let a = 10;
// var b = 20;
// const c = 30;
// {
//   let a = 100;
//   var b = 200;
//   const c = 300;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// console.log("end");

// console.log("start");
// let a = 10;
// console.log(b);
// {
//   var b = 200;
// }
// console.log(a);
// console.log(b);
// console.log("end");


// console.log("start");
// let a = 10;
// {
//   console.log(a);
//   let a = 10;
// }
// console.log(a);
// console.log(b);
// console.log("end");



// console.log("start");
// var b = 20;
// const c = 30;
// {
//   let a = 100;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log("end");

//!HOISTING
// console.log("start");
// let a = 10;
// var b = 20;
// const c = 30;
// {
//   let a = 10;
//   console.log(a);
//   const c = 300;
//   console.log(b);
//   b = 200;
//   c = 30;
//   console.log(b);
// }
// console.log(a);
// console.log(b);
// console.log("end");


//!EXEPTIONAL HANDLING
/* try{
    const m=1;
    const n=2;
    console.log(m)
    console.log(n)
    console.log(a)
}catch(error)
{
    console.log("Error Name: "+error.name)
    console.log("Error Message:"+error.message)
}
finally{
    console.log("Task Completed!");
} */



/*let obj={};
try {
    const name=prompt("Enter user name")
    const age=+prompt("Enter your age")
    if(name==="")
    {
        throw new Error("Name is not passed by the user!");        
    }
    else if(age===0)
    {
        throw new Error("Age is not passed by the user!");        
    }
    else{
        console.log("User Name: "+name)
        console.log("User age: "+age)
    }
} catch (error) {
    console.log("Error: "+error.message)
}
finally{
    console.log(obj)
    console.log("Task Completed!")
} */



    //!IMPLICIT
    /*let a=null;
    let b=Number(a)
    console.log(typeof(b),b) */


    //!EXPLICIT
    // let a="a+12";
    // let b=Symbol(a)  
    // console.log(b)
    // console.log(typeof(b));

// function strlen(str){
//     var alpha=str.split(" ");
//     console.log(alpha);
//     var maxlength=0;

//     for(var i=0;i<=alpha.length;i++){
//         if(alpha[i].length>maxlength){
//             maxlength=alpha[i].length;
//         }
//     }
//     return maxlength;
// }
// strlen("hello harshit");


//!ASYNC AND AWAIT => 
/*async/await is built on top of Promises, offering a more readable and synchronous-like coding 
style for handling asynchronous operations in JavaScript.*/


/*const p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise is printed");
    }, 5000);
});

//*Await can only be used inside async function
async function getData(){

//*  JS engine will wait for promise to resolve the operation
    const h = await p;
    console.log("Namaste javascript");
    console.log(h);
}*/


//*normal use of promise method
/*const p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise is printed");
    }, 5000);
});
function getData(){
    p.then((res)=>console.log(res));

    console.log("Namaste javascript");
}*/

// getData();



//*2ND EXAMPLE OF ASYNC AND AWAIT

/*const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise is printed 1");
    }, 5000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise is printed 2");
    }, 10000);
});

async function getData(){
    console.log("hello world");
    const h1 = await p1;
    console.log("Namaste javascript 1");
    console.log(h1);

    const h2 = await p2;
    console.log("Namaste javascript 2");
    console.log(h2);
}
getData();*/


//!FETCH API
/*The fetch() function in JavaScript is used to make HTTP requests to fetch resources over the network. 
It is a modern replacement for XMLHttpRequest and provides a more flexible and powerful way to handle network requests. */


/*const API_CALL= "https://api.github.com/users";

async function gitData() {
    const data = await fetch(API_CALL);

    const calljson = await data.json();

    console.log(calljson);
}
gitData().catch((err)=>console.log("invalid"));*/ //we can handle the error from here because async function returns promise so .catch is the feature of promise

  

//!THIS KEYWORD
"use strict";  //strict mode

/*console.log(this); //global space - it can be 'window' or 'global' depending upon where we run our program

function x(){
    //the value of this is depending upon strict or non-strict mode
    console.log(this); 
}

x(); //undefined


//if the value of 'this' keyword is undefined or null then 'this' 
//keyword will be replaced by global object only in non strict mode 

window.x(); */  // the value of 'this' keyword is depending on how we called (window-object)


//AND


/* const obj = {
    a:10,
    x: function (){
        console.log(this); // call object
        console.log(this.a); // call the variable inside object
    }
}
obj.x(); */


//AND


 //*Another example with call method
/*const student={
    name: "Harshit",
    roll: function (a){
        console.log(this.name);
    }
}

const student2={
    name: "Bansal"
}

by call method 
student.roll.call(student2); */


//AND


//*'this' keyword inside arrow function
/*
const behave={
    a:10,
    x: ()=>{
        console.log(this); // it behaves like the value is lexical context (window)
    }
}
behave.x(); */


//AND


//*'this' keyword inside nested arrow function 

/*const behave={
    a:10,
    x: function (){
    //enclosing lexical context
        const y = () =>{
          console.log(this); // it calls the current object
        }
        y();
    }
}
behave.x();*/

//AND

//*'this' keyword inside DOM reference to an HTML element


//!PROTOTYPE

//* By Function

 /*function Car(name,model,price){
    this.name=name;
    this.model=model;
    this.price=price;
}

Car.prototype.sound='High Bass'
Car.prototype.drive=function(){
    console.log(`I am Driving ${this.name} and model: ${this.model}`)
}
Car.prototype.playSong=function (song) {
    console.log(`Hey Alexa play ${song}`);
    switch (song) {
        case 'blue eyes':
            console.log('Blue eyes hypnotise teri......')
            break;
    
        case 'brown rang':
            console.log('Kudiye ni tere brwon rang de.......')
            break;
        default:
            console.log('Gaane ka naam likho bhai!!')
            break;
    }
};

const car1=new Car('Tesla','Y','75 Lakh')
const car2=new Car('Thar','4X4','18 Lakh')

console.log(car1)
console.log(car2)

car1.drive()
car1.playSong('blue eyes');
console.log(car1.sound); */


//*By Object
/*let obj={
    name: "Harshit",
    city: "Delhi",
    getintro: function (){
        console.log(this.name + " from " + this.city);
    }
}

let obj2={
    Name: "Bansal"
}

//never do this
 obj2.__proto__=obj;
 obj2.getintro(); */





 //!CLOSURE EXAMPLE
 /*function createbankaccount(initialisation){
    let balance = initialisation;

    return {
        deposite: function(amount){
            balance = balance + amount;
            return `Deposited amount ${amount}. New balance ${balance}`;
        },

        widthdraw: function(amount){
            if(amount>balance){
                return `insufficient balance`;
            }
            balance = balance - amount;
            return `Widthdrawl amount ${amount}. New balance ${balance}`
        },

        checkbalance: function(){
            return `Balance is: ${balance}`;
        }
    };
 }

 const account1 = createbankaccount(10000);
 const account2 = createbankaccount(2000);

 console.log(account1.deposite(500));
 console.log(account2.deposite(1000));
 console.log(account1.widthdraw(200));
 console.log(account1.checkbalance);
 console.log(account2.checkbalance);*/



//!Closure example with event listener
 /*function attachevent(){
    let count=0;
    document.getElementById("clickme").addEventListener('click', ()=>{
        console.log("button clicked", ++count);
    }
)}
attachevent(); */



 //!CALLBACK
 /*setTimeout(function() {
    console.log("timer");
 }, 5000);

 function x(y){
    console.log("x");
    y();
 }

 x(function y(){
    console.log("y");
 }); */

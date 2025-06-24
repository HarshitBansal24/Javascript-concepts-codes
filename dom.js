// dom-1

/* const body=document.body;
body.style.cssText="background-color:#000;color:#fff;font-size:45px;"


const heading=document.getElementById("root")
heading.style.fontSize="75px"


const divItems=document.getElementsByClassName("item");
console.log(divItems);
divItems[2].style.color="cyan" */

/* const divs=document.getElementsByTagName("div")
divs["parent"].style.cssText="background-color:black;color:cyan;font-size:55px;padding:50px"; */

/* const div=document.querySelector("#parent>.item:last-of-type")
console.log(div);

const divs=document.querySelectorAll(".item")
divs[2].textContent="Abra Ka Dabra"
divs[2].style.color="red" */



// dom-2


/* const h1=document.createElement("h1")
h1.textContent="Jai Shree Ram 🙏"

const body=document.body
body.appendChild(h1) */


/* const div=document.getElementById("box");
const ul=document.createElement("ul");
div.appendChild(ul);

const list1=document.createElement("li")
const list2=document.createElement("li")
const list3=document.createElement("li")

list1.textContent="HTML"
list2.textContent="CSS"
list3.textContent="JavaScript"

ul.appendChild(list1)
ul.appendChild(list2)
ul.appendChild(list3) 

const body=document.body */



 /* // First Sibling
const p1=document.createElement("p");
p1.textContent="Starting Tag"
const div=document.getElementById("box")
div.insertAdjacentElement("beforebegin",p1)


Last Sibling
const p2=document.createElement("p");
p2.textContent="Ending tag"
div.insertAdjacentElement("afterend",p2) */


/* const first=document.createElement("p")
const last=document.createElement("p")

first.textContent="Paragraph Tag-1"
last.textContent="Paragraph Tag-3"

const div=document.getElementById("box")

div.insertAdjacentElement("afterbegin",first)
div.insertAdjacentElement("beforeend",last) */


// dom-3
/* const p=document.querySelector("p");
p.textContent=p.textContent += "I am a Web Developer"; */


 /* const p=document.querySelector("p")
p.innerHTML="Hello I am <a href='' target='_blank'>Web Developers</a>" */


/* const div=document.getElementById("example")
console.log(div.outerHTML)

div.outerHTML=`<section>
                    <p>Ram Ram Bhai Sareyane..!!</p>
                </section>` */



// GETATTRIBUTE:-
 /* const div=document.getElementById("example")
if(div.getAttribute("class")==="div1")
{
    console.log("Matched..!!")
}
else{
    console.log("Not Match")
} */


    // set an Attribute
    /* const div=document.getElementById("example")
    
    div.setAttribute("class","div1 chombu")
    div.setAttribute("class",`${div.getAttribute("class")} chombu`)
    
    div.setAttribute("style",`background-color:black;color:white;`)

    console.log(div.getAttribute("class"))
    console.log(div.getAttribute("id")) */


    // REMOVE an attribute
/* const div=document.getElementById("example");
div.removeAttribute("title")
*/


// CREATE Attribute
/* const attribute=document.createAttribute("id")
attribute.value="para"
const p=document.querySelector('p')

   SET Attribute
   p.setAttributeNode(attribute) */


// const h1=document.querySelector("h1")
// h1.setAttribute("id","root")



// dom-4

// const p=document.getElementById("last")
// const element=document.querySelector("#parent>:first-child")


// p.addEventListener("mouseenter",()=>{
//     element.style.color="red"
// })

    
    


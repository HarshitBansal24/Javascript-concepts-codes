// ADD EVENT LISTENERS
//  const body=document.body;

/* let button=document.querySelector('button');
let h1=document.querySelector('h1');
button.addEventListener('click', (e)=>{
    body.style.cssText="background-color:red;color:white;"

    h1.textContent="Learning js"
}); */


//or


/* button.onclick=(e)=>{
    body.style.cssText="background-color:red;color:white;"
    h1.textContent="Learning js"
} */


// KEYBOARD EVENTS
/*const box=document.getElementById("box")
let lSide=100;
let tSide=100;

window.addEventListener("keydown",(e)=>{
    let move=50;
    switch (e.key) {
        case "ArrowUp":
            tSide=tSide-move;
            break;
        case "ArrowDown":
            tSide=tSide+move;
            break;
        case "ArrowLeft":
            lSide=lSide-move;
            break;
        case "ArrowRight": 
            lSide=lSide+move;
            break;
        default:
            break;
    }
    box.style.left=lSide + "px";
    box.style.top=tSide + "px"
    
}); */  



// KEYBOARD EVENTS
/* window.addEventListener("keydown",(e)=>{
    if(e.ctrlKey && (e.key==="D"||e.key==="d"))
    {
        e.preventDefault()
        document.body.style.cssText="background-color:black;color:white;"
    }
    else if(e.ctrlKey && (e.key==="L"||e.key==="l"))
    {
        e.preventDefault();
        document.body.style.cssText="background-color:white;color:black;"
    }    
});  */



// MOUSE EVENTS
// const button=document.querySelector("button")

// click
/* button.addEventListener("click",()=>{
    console.log("Button Left Clicked..!!")
}) */

// dblclick 
/*button.addEventListener("dblclick",()=>{
    console.log("Jhukega Nahi..!!")
}) */

/* mousedown 

button.addEventListener("mousedown",()=>{
    console.log("Mouse Pressed")
})*/

/* Mouseup
button.addEventListener("mouseup",()=>{
    console.log("Mouse Released")
})*/

/* mousemove
button.addEventListener("mousemove",(e)=>{
    console.log(`Mouse Position X=${e.clientX} y=${e.clientY}`)
})*/

//mouseover and mouseenter 
/* button.addEventListener("mouseover",()=>{
    document.body.style.cssText="background-color:#000"
    console.log("Mouse is Hover")
}) */

// mouseout  and mouseleave
/* button.addEventListener("mouseout",()=>{
    document.body.style.cssText="background-color:white"
    console.log("Mouse is Out")
}) */

// contextmenu for Right click 
/* button.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
    console.log("Button Right Clicked")
})*/


//wheel 
/*button.addEventListener("wheel",(e)=>{
    console.log(e.deltaY)
}) */
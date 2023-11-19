
const menu=document.querySelector("#menu");
const close=document.querySelector("#close");
navLinks=document.querySelector(".nav-links");
const moon=document.querySelector(".fa-moon-o");
const body=document.querySelector("body");
const sun=document.querySelector(".fa-sun-o");
menu.addEventListener("click",()=>{
navLinks.style.right="0px";
})
close.addEventListener("click",()=>{
    navLinks.style.right="-200px"
})
moon.addEventListener("click",()=>{
   body.classList.toggle("bg-dark");

    moon.style.display="none";
    sun.style.display="block"

})

sun.addEventListener("click",()=>{
    moon.style.display="block";
    sun.style.display="none";
    body.classList.remove("bg-dark")
})
// ---------scroll-reveal
window.addEventListener("scroll",()=>{

const content=document.querySelector(".about")
const contentHeight=content.getBoundingClientRect().top;
const innerH=window.innerHeight;
if(contentHeight<innerH){
    content.classList.add("active")
}
else{
    content.classList.remove("active")
}

})


window.addEventListener("scroll",()=>{
    const skill=document.querySelector(".skill-container");
    const h1=document.querySelector(".my-skill");
    const left=document.querySelector(".skill-left");
    const right=document.querySelector(".skill-right");
    const skillHeight=left.getBoundingClientRect().top;
    const innerH=window.innerHeight;
    if(skillHeight<innerH){
       left.classList.add("active-skill");
       right.classList.add("active-skill")
       h1.classList.add("my-active")

    }
   else{
    left.classList.remove("active-skill");
       right.classList.remove("active-skill")
       h1.classList.remove("my-active")
   }
})
// project

window.addEventListener("scroll",()=>{
    const h1=document.querySelector(".h1-proj");
    const project=document.querySelector(".proj-move");
    // const projectCont=project.getBoundingClientRect().top;
    const h1Content=h1.getBoundingClientRect().top;
    const innerH=window.innerHeight;
    if(h1Content<innerH){
       h1.classList.add("active-proj");
      project.classList.add("row");
    }
    else{
        h1.classList.remove("active-proj")
        project.classList.remove("row");
    }
})

//contact
window.addEventListener("scroll",()=>{
    const h1=document.querySelector(".h1-cont");
    const leftCont=document.querySelector(".contact-left");
    const rightCont=document.querySelector(".contact-right");
    // const projectCont=project.getBoundingClientRect().top;
    const h1Content=h1.getBoundingClientRect().top;
    const innerH=window.innerHeight;
    if(h1Content<innerH){
       h1.classList.add("active-h1");
       rightCont.classList.add("active-contRight");
       leftCont.classList.add("active-contLeft");

    }
    else{
        h1.classList.remove("active-h1");
        rightCont.classList.remove("active-contRight");
        leftCont.classList.remove("active-contLeft");

    }
})


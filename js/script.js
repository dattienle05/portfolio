/*====================================================
            LE TIEN DAT PORTFOLIO
=====================================================*/


/*============================
    LOADER
=============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});


/*============================
    BACK TO TOP
=============================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "flex";

    }

    else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*============================
    HEADER SHADOW
=============================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(10,10,20,.9)";

        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(8,10,18,.6)";

        header.style.boxShadow = "none";

    }

});


/*============================
    ACTIVE NAVBAR
=============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*============================
    CURSOR GLOW
=============================*/

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


/*============================
    FADE IN
=============================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll(".section").forEach(section=>{

observer.observe(section);

});


/*============================
    COUNTER
=============================*/

const counters=document.querySelectorAll(".stat-card h3");

const speed=80;

const runCounter=()=>{

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const update=()=>{

const increment=Math.ceil(target/speed);

count+=increment;

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

}

update();

});

}

runCounter();


/*============================
    TILT EFFECT
=============================*/

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*16;

const rotateX=((y/rect.height)-0.5)*-16;

card.style.transform=

`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});


/*============================
    PARALLAX HERO
=============================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let value=window.scrollY;

hero.style.backgroundPositionY=value*.4+"px";

});


/*============================
    BUTTON RIPPLE
=============================*/

document.querySelectorAll(".btn-primary").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});


/*============================
    SMOOTH SCROLL
=============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/*============================
    CONSOLE
=============================*/

console.log("%cPortfolio Loaded Successfully","color:#d4af37;font-size:18px;font-weight:bold;");
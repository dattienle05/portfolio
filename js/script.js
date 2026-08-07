/*==================================================
        LE TIEN DAT PORTFOLIO
        SCRIPT.JS
==================================================*/


/*==================================================
                LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        },1200);

    }

});


/*==================================================
            HEADER SCROLL EFFECT
==================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(!header) return;

    if(window.scrollY>80){

        header.style.background="rgba(238,248,250,.96)";
        header.style.boxShadow="0 12px 35px rgba(0,28,68,.08)";

    }

    else{

        header.style.background="rgba(238,248,250,.88)";
        header.style.boxShadow="none";

    }

});


/*==================================================
            ACTIVE NAVIGATION
==================================================*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;
        const height=section.offsetHeight;

        if(window.scrollY>=top &&
           window.scrollY<top+height){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*==================================================
            SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==================================================
                BACK TO TOP
==================================================*/

const topButton=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(!topButton) return;

    if(window.scrollY>500){

        topButton.style.display="flex";

    }

    else{

        topButton.style.display="none";

    }

});

if(topButton){

    topButton.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}


/*==================================================
            SECTION REVEAL
==================================================*/

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

document.querySelectorAll(".section").forEach(section=>{

observer.observe(section);

});


/*==================================================
                HERO CARDS
==================================================*/

const cards=document.querySelectorAll(".dashboard-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});


/*==================================================
            PROJECT HOVER
==================================================*/

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y/rect.height)-0.5)*-8;

const rotateY=((x/rect.width)-0.5)*8;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="none";

});

});


/*==================================================
            BUTTON RIPPLE
==================================================*/

document.querySelectorAll(".btn-primary,.btn-secondary")

.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";
circle.style.top=e.offsetY-diameter/2+"px";

const ripple=this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});
/*==================================================
            COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll("[data-count]");

const animateCounter = (counter) => {

    const target = parseInt(counter.dataset.count);
    const duration = 1800;
    const start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {

        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );

        const value = Math.floor(
            progress * (target - start) + start
        );

        counter.textContent = value;

        if (progress < 1) {

            requestAnimationFrame(update);

        }

    };

    requestAnimationFrame(update);

};

const counterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

},

{

threshold:.6

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*==================================================
            CURSOR GLOW
==================================================*/

const cursor=document.querySelector(".cursor-glow");

if(cursor){

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

}


/*==================================================
            PARALLAX HERO
==================================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(!hero) return;

const offset=window.pageYOffset;

hero.style.backgroundPositionY=

offset*0.25+"px";

});


/*==================================================
        CERTIFICATE IMAGE MODAL
==================================================*/

const modal=document.querySelector(".modal");

const modalImage=modal
?modal.querySelector("img")
:null;

const certificate=document.querySelector(".certificate-preview img");

if(certificate && modal){

certificate.addEventListener("click",()=>{

modal.classList.add("show");

modalImage.src=certificate.src;

});

modal.addEventListener("click",(e)=>{

if(

e.target===modal ||

e.target.classList.contains("modal-close")

){

modal.classList.remove("show");

}

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

modal.classList.remove("show");

}

});

}


/*==================================================
            FADE IN CARDS
==================================================*/

const fadeItems=document.querySelectorAll(

".project-card,.skill-card,.dashboard-card,.contact-card"

);

const fadeObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.15

}

);

fadeItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(35px)";

item.style.transition="all .7s ease";

fadeObserver.observe(item);

});


/*==================================================
        REMOVE FOCUS AFTER CLICK
==================================================*/

document.querySelectorAll("button,a").forEach(el=>{

el.addEventListener("mouseup",()=>{

el.blur();

});

});


/*==================================================
            RESIZE FIX
==================================================*/

window.addEventListener("resize",()=>{

document.body.style.overflowX="hidden";

});


/*==================================================
            PERFORMANCE
==================================================*/

window.addEventListener(

"scroll",

()=>{},

{

passive:true

}

);


/*==================================================
            CONSOLE
==================================================*/

console.log(

"%cPortfolio Ready",

"color:#2D99AE;font-size:18px;font-weight:bold;"

);

console.log(

"%cLe Tien Dat Portfolio",

"color:#001C44;font-size:14px;"

);


/*====================================*
    CFA SCORE REPORT
*=====================================*/

const cfaAboutCard = document.getElementById("open-cfa");

const cfaCertificationCard = document.getElementById("openCFA");

const cfaModal = document.getElementById("cfaModal");

const closeCFA = document.getElementById("closeCFA");


/*==========================
    OPEN CFA MODAL
==========================*/

function openCFAModal() {

    if (!cfaModal) return;

    cfaModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/*==========================
    ABOUT ME CFA
==========================*/

if (cfaAboutCard) {

    cfaAboutCard.addEventListener("click", openCFAModal);

}


/*==========================
    CERTIFICATION CFA
==========================*/

if (cfaCertificationCard) {

    cfaCertificationCard.addEventListener("click", openCFAModal);

}


/*==========================
    CLOSE BUTTON
==========================*/

if (closeCFA) {

    closeCFA.addEventListener("click", () => {

        cfaModal.classList.remove("active");

        document.body.style.overflow = "";

    });

}


/*==========================
    CLICK OUTSIDE MODAL
==========================*/

window.addEventListener("click", (e) => {

    if (e.target === cfaModal) {

        cfaModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});


/*==========================
    ESC KEY
==========================*/

window.addEventListener("keydown", (e) => {

    if (
        e.key === "Escape" &&
        cfaModal &&
        cfaModal.classList.contains("active")
    ) {

        cfaModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});
/*==================================================
  SUVEENTHAR PORTFOLIO V3
  PART 1
  DOM • NAVBAR • MENU • SMOOTH SCROLL
==================================================*/

"use strict";

/*==================================================
DOM ELEMENTS
==================================================*/

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

const cursorGlow = document.querySelector(".cursor-glow");

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

/*==================================================
MOBILE MENU
==================================================*/

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}


/*==================================================
CLOSE MENU AFTER CLICK
==================================================*/

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});


/*==================================================
NAVBAR BACKGROUND
==================================================*/

function updateNavbar() {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


/*==================================================
CURSOR GLOW
==================================================*/

if (cursorGlow) {

    document.addEventListener("mousemove", e => {

        cursorGlow.style.left = `${e.clientX}px`;

        cursorGlow.style.top = `${e.clientY}px`;

    });

}

/*==================================================
  SUVEENTHAR PORTFOLIO V3
  PART 2
  TYPEWRITER • COUNTERS • SCROLL REVEAL
==================================================*/

/*==================================================
TYPEWRITER
==================================================*/

const roles = [
    "AI & Data Science Student",
    "Unity Game Developer",
    "Full Stack Developer",
    "Content Creator"
];

const typewriter = document.getElementById("typewriter");

if (typewriter) {

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typewriter.textContent = currentRole.substring(0, charIndex);
            charIndex++;

            if (charIndex > currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 1700);

                return;

            }

        } else {

            typewriter.textContent = currentRole.substring(0, charIndex);
            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                roleIndex = (roleIndex + 1) % roles.length;

                charIndex = 0;

            }

        }

        setTimeout(typeEffect, deleting ? 40 : 70);

    }

    typeEffect();

}


/*==================================================
COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 60));

        function updateCounter() {

            current += increment;

            if (current >= target) {

                counter.textContent = target;

            } else {

                counter.textContent = current;

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*==================================================
SCROLL REVEAL
==================================================*/

const revealElements = document.querySelectorAll(

    ".section-header, .about-content, .about-card, .project-card, .contact-card, .stat-card"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("reveal");

            entry.target.classList.add("active");

            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(element => {

    revealObserver.observe(element);

});

/*==================================================
  SUVEENTHAR PORTFOLIO V3
  PART 3
  ACTIVE NAV • COPY EMAIL • FOOTER • RIPPLE
==================================================*/

/*==================================================
ACTIVE NAVIGATION
==================================================*/

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const top = section.offsetTop - 140;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            currentSection = section.id;

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/*==================================================
COPY EMAIL
==================================================*/

const copyButton = document.querySelector(".copy-btn");

if (copyButton) {

    copyButton.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(
                "tsuveenthar@gmail.com"
            );

            const original = copyButton.textContent;

            copyButton.textContent = "Copied!";

            setTimeout(() => {

                copyButton.textContent = original;

            }, 1800);

        } catch (err) {

            console.error("Clipboard failed", err);

        }

    });

}


/*==================================================
FOOTER YEAR
==================================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/

const rippleButtons = document.querySelectorAll(

    ".primary-btn, .secondary-btn, .play-btn, .website-btn, .github-btn, .copy-btn"

);

rippleButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top =
            (e.clientY - rect.top - size / 2) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*==================================================
CONSOLE MESSAGE
==================================================*/

console.clear();

console.log(

"%c🚀 Welcome to Suveenthar's Portfolio",

"color:#e2142d;font-size:20px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Suveenthar T",

"color:#ffffff;font-size:14px;"

);

/*==================================================
  SUVEENTHAR PORTFOLIO V3
  NEW OVERLAY SYSTEM
==================================================*/

/*===========================
ELEMENTS
===========================*/

const gameOverlay = document.getElementById("gameOverlay");
const gameWindow = document.querySelector(".game-window");
const gameFrame = document.getElementById("gameFrame");
const gameLoading = document.getElementById("gameLoading");
const gameTitle = document.getElementById("gameTitle");


const closeGame = document.getElementById("closeGame");
const reloadGame = document.getElementById("reloadGame");


let currentGameURL = "";

/*===========================
OPEN GAME
===========================*/

document.querySelectorAll(".play-btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        currentGameURL = btn.dataset.game;

        gameTitle.textContent =
            btn.dataset.title ||
            btn.closest(".project-card").querySelector("h3").textContent;

        gameOverlay.classList.add("active");

        document.body.style.overflow="hidden";

        gameLoading.classList.remove("loaded");

        gameFrame.style.opacity="0";

        gameFrame.src=currentGameURL;

    });

});

/*===========================
GAME LOADED
===========================*/

gameFrame.onload=()=>{

    setTimeout(()=>{

        gameLoading.classList.add("loaded");

        gameFrame.style.opacity="1";

    },500);

};

/*===========================
CLOSE GAME
===========================*/

function closeGameOverlay(){

    gameOverlay.classList.remove("active");

    document.body.style.overflow="";

    gameLoading.classList.remove("loaded");

    gameFrame.style.opacity="0";

    setTimeout(()=>{

        gameFrame.src="about:blank";

    },250);

}

/*===========================
RELOAD GAME
===========================*/

reloadGame?.addEventListener("click",()=>{

    if(!currentGameURL) return;

    gameLoading.classList.remove("loaded");

    gameFrame.style.opacity="0";

    gameFrame.src=currentGameURL;

});



/*===========================
BUTTONS
===========================*/

closeGame?.addEventListener(

    "click",

    closeGameOverlay

);


/*===========================
ESC
===========================*/

document.addEventListener("keydown",e=>{

    if(e.key!=="Escape") return;

    if(gameOverlay.classList.contains("active")){

        closeGameOverlay();

    }


});

/*===========================
OUTSIDE CLICK
===========================*/

gameOverlay.addEventListener("click",e=>{

    if(e.target===gameOverlay){

        closeGameOverlay();

    }

});


gameWindow.addEventListener("click",e=>{

    e.stopPropagation();

});


/*===========================
WINDOW RESIZE
===========================*/

window.addEventListener("resize",()=>{

    if(gameOverlay.classList.contains("active")){

        gameFrame.contentWindow?.postMessage(

            "resize",

            "*"

        );

    }

});

/*==================================================
  SUVEENTHAR PORTFOLIO V3
  PART 6
  FINAL OPTIMIZATION & STARTUP
==================================================*/

/*==================================================
PRELOAD IMAGES
==================================================*/

window.addEventListener("load", () => {

    document.querySelectorAll("img").forEach(img => {

        if (!img.complete) {

            img.loading = "eager";

        }

    });

});


/*==================================================
LAZY LOAD IFRAMES
==================================================*/

if (gameFrame) {
    gameFrame.setAttribute("loading", "lazy");
}


/*==================================================
RESTORE SCROLL
==================================================*/

window.addEventListener("pageshow", () => {

    document.body.style.overflow = "";

});


/*==================================================
WINDOW RESIZE
==================================================*/

window.addEventListener("resize", () => {

    updateNavbar();

    updateActiveNav();

});


/*==================================================
SAFETY CHECK
==================================================*/

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("dragstart", e => {

        e.preventDefault();

    });

});


/*==================================================
DISABLE IMAGE DRAGGING
==================================================*/

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});


/*==================================================
PAGE VISIBILITY
==================================================*/

document.addEventListener("visibilitychange", () => {

    if (!document.hidden) {

        updateNavbar();

        updateActiveNav();

    }

});


/*==================================================
GLOBAL ERROR HANDLER
==================================================*/

window.addEventListener("error", event => {

    console.warn(
        "Portfolio Error:",
        event.message
    );

});


/*==================================================
INITIALIZE PORTFOLIO
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    updateNavbar();

    updateActiveNav();

    console.log(
        "%c✔ Portfolio Initialized Successfully",
        "color:#00ff88;font-size:14px;font-weight:bold;"
    );

});


/*==================================================
VERSION
==================================================*/

console.log(

    "%cPortfolio Version 3.0",

    "color:#e2142d;font-size:13px;font-weight:bold;"

);

console.log(

    "%cBuilt with ❤️ by Suveenthar T",

    "color:#ffffff;font-size:12px;"

);


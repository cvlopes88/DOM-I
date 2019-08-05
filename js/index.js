const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const navs = document.querySelectorAll('a');
navs[0].textContent = siteContent["nav"]["nav-item-1"];
navs[1].textContent = siteContent["nav"]["nav-item-2"];
navs[2].textContent = siteContent["nav"]["nav-item-3"];
navs[3].textContent = siteContent["nav"]["nav-item-4"];
navs[4].textContent = siteContent["nav"]["nav-item-5"];
navs[5].textContent = siteContent["nav"]["nav-item-6"];




const newNav = document.createElement("a");
newNav.textContent = "times";

const newNavTwo = document.createElement("a");
newNavTwo.textContent = "Power";


const nav = document.querySelector('nav');
nav.prepend(newNav); 
nav.appendChild(newNavTwo);

const greenA = document.querySelectorAll("a");
greenA.forEach(goGreen => {
  
   goGreen.style.color = "green";
})


const topImg = document.getElementById('cta-img');
topImg.setAttribute('src', siteContent["cta"]["img-src"]);



const firstButoon = document.querySelector('button');
firstButoon.textContent = "Get Started";

const topHeader = document.querySelector("h1");
topHeader.textContent = ("DOM Is Awesome");


const centerImg = document.getElementById('middle-img');
centerImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const mainContentHead = document.querySelectorAll("h4");
mainContentHead[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHead[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHead[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHead[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHead[4].textContent = siteContent["main-content"]["vision-h4"];



const mainContent = document.querySelectorAll("p");
mainContent[0].textContent = siteContent["main-content"]["features-content"];
mainContent[1].textContent = siteContent["main-content"]["about-content"];
mainContent[2].textContent = siteContent["main-content"]["services-content"];
mainContent[3].textContent = siteContent["main-content"]["product-content"];
mainContent[4].textContent = siteContent["main-content"]["vision-content"];



const lastContentHead = document.querySelector(".contact h4");
lastContentHead.textContent = siteContent["contact"]["contact-h4"];

const lastContent = document.querySelectorAll(".contact p");
lastContent[0].textContent = siteContent["contact"]["address"];
lastContent[1].textContent = siteContent["contact"]["phone"];
lastContent[2].textContent = siteContent["contact"]["email"];


const footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];








const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navigation = document.querySelectorAll("nav a");
navigation[0].textContent = siteContent["nav"]["nav-item-1"];
navigation[1].textContent = siteContent["nav"]["nav-item-2"];
navigation[2].textContent = siteContent["nav"]["nav-item-3"];
navigation[3].textContent = siteContent["nav"]["nav-item-4"];
navigation[4].textContent = siteContent["nav"]["nav-item-5"];
navigation[5].textContent = siteContent["nav"]["nav-item-6"];
let title = document.querySelector("h1");
title.textContent = siteContent["cta"]["h1"];
let first = document.querySelector("#cta-img");
first.src = siteContent["cta"]["img-src"];
let getStarted = document.querySelector("button");
getStarted.textContent = siteContent["cta"]["button"];
let mainTitles = document.querySelectorAll(".main-content h4");
mainTitles[0].textContent = siteContent["main-content"]["features-h4"];
mainTitles[1].textContent = siteContent["main-content"]["about-h4"];
mainTitles[2].textContent = siteContent["main-content"]["services-h4"];
mainTitles[3].textContent = siteContent["main-content"]["product-h4"];
mainTitles[4].textContent = siteContent["main-content"]["vision-h4"];
let mainText = document.querySelectorAll(".main-content p");
mainText[0].textContent = siteContent["main-content"]["features-content"]
mainText[1].textContent = siteContent["main-content"]["about-content"]
mainText[2].textContent = siteContent["main-content"]["services-content"]
mainText[3].textContent = siteContent["main-content"]["product-content"]
mainText[4].textContent = siteContent["main-content"]["vision-content"]
let second = document.querySelector("#middle-img");
second.src = siteContent["main-content"]["middle-img-src"]
let contactHead = document.querySelector(".contact h4");
contactHead.textContent = siteContent["contact"]["contact-h4"]
let contactInfo = document.querySelectorAll(".contact p")
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];
let copyright = document.querySelector("footer");
copyright.textContent = siteContent["footer"]["copyright"];
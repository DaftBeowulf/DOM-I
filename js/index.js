const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
// const logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

//selectors

// nav items (6 anchor tags and 1 image)
const navLinks = document.querySelectorAll("a");
// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].innerText = siteContent.nav[i];
// }
navLinks[0].innerText = siteContent.nav["nav-item-1"];
navLinks[1].innerText = siteContent.nav["nav-item-2"];
navLinks[2].innerText = siteContent.nav["nav-item-3"];
navLinks[3].innerText = siteContent.nav["nav-item-4"];
navLinks[4].innerText = siteContent.nav["nav-item-5"];
navLinks[5].innerText = siteContent.nav["nav-item-6"];

const headerLogo = document.querySelector("#logo-img");
headerLogo.setAttribute("src", siteContent["nav"]["img-src"]);

const firstNav = document.createElement("a");
firstNav.innerHTML = '<a href="#" style="color: green">First</a>';

const lastNav = document.createElement("a");
lastNav.innerHTML = "<a href='#' style='color: green'>Last</a>";

const nav = document.querySelector("nav");
nav.prepend(firstNav);
nav.appendChild(lastNav);

navLinks.forEach(link => (link.style.color = "green"));

//cta (h1, button, img)
const ctaText = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.querySelector("#cta-img");
//changing innerHTML here to be able to include <br> tags
ctaText.innerHTML = "<h1>DOM<br> Is<br> Awesome</h1>";
ctaButton.innerText = siteContent.cta.button;
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//main content (top content, middle img, bottom content)
//top content, 2 divs each with h4 and p tags
const topHeaders = document.querySelectorAll(".top-content .text-content h4");
const topParas = document.querySelectorAll(".top-content .text-content p");

topHeaders[0].innerText = siteContent["main-content"]["features-h4"];
topHeaders[1].innerText = siteContent["main-content"]["about-h4"];
topParas[0].innerText = siteContent["main-content"]["features-content"];
topParas[1].innerText = siteContent["main-content"]["about-content"];

//middle img
const middleImg = document.querySelector("#middle-img");

middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
//bottom-content, same as top but 3 times each
const bottomHeaders = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
const bottomParas = document.querySelectorAll(
  ".bottom-content .text-content p"
);

bottomHeaders[0].innerText = siteContent["main-content"]["services-h4"];
bottomHeaders[1].innerText = siteContent["main-content"]["product-h4"];
bottomHeaders[2].innerText = siteContent["main-content"]["vision-h4"];
bottomParas[0].innerText = siteContent["main-content"]["services-content"];
bottomParas[1].innerText = siteContent["main-content"]["product-content"];
bottomParas[2].innerText = siteContent["main-content"]["vision-content"];

//contact section (one h4 and 3 p tags)
const contactHeader = document.querySelector(".contact h4");
const contactParas = document.querySelectorAll(".contact p");

contactHeader.innerText = siteContent.contact["contact-h4"];
contactParas[0].innerHTML = "<p>123 Way 456 Street<br>Somewhere, USA</p>";
contactParas[1].innerText = siteContent.contact.phone;
contactParas[2].innerText = siteContent.contact.email;
//footer (1 p tag)
const footerPara = document.querySelector("footer p");

footerPara.innerText = siteContent.footer.copyright;

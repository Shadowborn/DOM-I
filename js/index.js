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
    logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation

    const navColor = document.querySelectorAll('nav a');
    navColor[0].style.color = 'green';
    navColor[1].style.color = 'green';
    navColor[2].style.color = 'green';
    navColor[3].style.color = 'green';
    navColor[4].style.color = 'green';
    navColor[5].style.color = 'green';
    

    const nav = document.querySelectorAll('nav a');
    nav[0].textContent = 'Services';
    nav[1].textContent = 'Product';
    nav[2].textContent = 'Vision';
    nav[3].textContent = 'Features';
    nav[4].textContent = 'About';
    nav[5].textContent = 'Contact';
    
    //append new nav item
    const newNav = document.createElement('a'); 
    newNav.href = '#';
    newNav.textContent = 'Water';                                
    const navSelect = document.querySelector('nav')
    navSelect.appendChild(newNav);
    newNav.style.color = 'green';
    
    //prepend new nav item
    const newNav2 = document.createElement('a');
    newNav2.href = '#';
    newNav2.textContent = 'Fire';
    navSelect.prepend(newNav2);
    newNav2.style.color = 'green';

//CTA CONTENT

    //cta h1
    const ctaText = document.querySelector('.cta-text h1');
    ctaText.textContent = 'DOM IS AWESOME';

    //cta button
    const ctaButton = document.querySelector('.cta-text button');
    ctaButton.textContent = 'Get Started';

    //cta image
    const ctaImage = document.querySelector('#cta-img');
    ctaImage.src = 'img/header-img.png';

// MAIN CONTENT

    //main h4
    const mainH4 = document.querySelectorAll('.main-content h4');
    mainH4[0].textContent = 'Features';
    mainH4[1].textContent = 'About';
    mainH4[2].textContent = 'Services';
    mainH4[3].textContent = 'Product';
    mainH4[4].textContent = 'Vision';

    //main content top
    const mainContentTop = document.querySelectorAll('.top-content p');
    mainContentTop[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
    mainContentTop[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

    //middle image
    const middleImage = document.querySelector('.middle-img');
    middleImage.src = 'img/mid-page-accent.jpg';

    //main content bottom
    const mainContentBottom = document.querySelectorAll('.bottom-content p');
    mainContentBottom[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
    mainContentBottom[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
    mainContentBottom[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


//Contact Content
    const contactH4 = document.querySelector('.contact h4');
    contactH4.textContent = 'Contact';

    const contactParagraphs = document.querySelectorAll('.contact p');
    contactParagraphs[0].textContent = '123 Way 456 Street Somewhere, USA';
    contactParagraphs[1].textContent = '1 (888) 888-8888';
    contactParagraphs[2].textContent = 'sales@greatidea.io';

//Footer 
    const copyright = document.querySelector('footer p');
    copyright.textContent = 'Copyright Great Idea! 2018';

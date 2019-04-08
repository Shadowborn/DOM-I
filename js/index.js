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
    const nav = document.querySelectorAll('nav a');
    nav[0].textContent = 'Services';
    nav[1].textContent = 'Product';
    nav[2].textContent = 'Vision';
    nav[3].textContent = 'Features';
    nav[4].textContent = 'About';
    nav[5].textContent = 'Contact';


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
    const mainH4 = document.querySelectorAll('.main-content h4')
    mainH4[0].textContent = 'Features';
    mainH4[1].textContent = 'About';
    mainH4[2].textContent = 'Services';
    mainH4[3].textContent = 'Product';
    mainH4[4].textContent = 'Vision';
    mainH4[5].textContent = 'Contact';
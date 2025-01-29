// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section active link 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    // sticky navbar

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar link (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

    // dark light mode

    let darkmodeIcon = document.querySelector("#darkmode-icon");

    darkmodeIcon.onclick = () => {
        darkmodeIcon.classList.toggle('bx-moon');
        document.body.classList.toggle('dark-mode');
    };

//scroll reveal

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});
ScrollReveal().reveal('.skillcontainer .wrapper',{origin: 'bottom'});

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Frontend Developer', 'Java Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop: true
});

let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: {gradient: ['#fdfdfd', '#0ef']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".c .bar").circleProgress({
    value: 0.70
  });
  $(".java .bar").circleProgress({
    value: 0.60
  });
  $(".js .bar").circleProgress({
    value: 0.60
  });
  $(".react .bar").circleProgress({
    value: 0.40
  });
  $(".sql .bar").circleProgress({
    value: 0.70
  });
  
setTimeout(()=>{
window.open("https://medium.com/@nitinmaurya969543")
},5000)
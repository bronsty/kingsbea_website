const heroContent = document.querySelector('.hero-content');
window.addEventListener('load', ()=>{
    heroContent.classList.add('active');
});

window.addEventListener('scroll', revealElements);
window.addEventListener('scroll', revealRsvp);


function revealElements(){
    if(window.pageYOffset > 100){
        document.querySelector('.scroll-to-top').classList.add('active');
    
    }
    else{
       document.querySelector('.scroll-to-top').classList.remove('active');
    
    }

    const bibleVerse = document.querySelector('.bible-verse');
    const line = document.querySelector('.line');
    const bibleText = document.querySelector('.bible-text-cont');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    const revealTop = bibleVerse.getBoundingClientRect().top;
    if(revealTop < windowHeight - revealPoint){
        line.classList.add('active');
        bibleText.classList.add('active');
    
    }
    else{
        line.classList.remove('active');
        bibleText.classList.remove('active');
    }

    const videoContainer = document.querySelector('video');
    var revealVideo = videoContainer.getBoundingClientRect().top;
    if(revealVideo < windowHeight - revealPoint){
        videoContainer.classList.add('active');
    } 
    else{
        videoContainer.classList.remove('active');

    }

}

// reveal for rsvp

function revealRsvp(){
    const rsvpCont = document.querySelector('.rsvp');
    const rsvp1 = document.querySelector('.rsvp1');
    const rsvp2 = document.querySelector('.rsvp2');
    const rsvp3 = document.querySelector('.rsvp3');

    var windHeight = window.innerHeight;
    var revTop1 = rsvp1.getBoundingClientRect().top;
    var revTop2 = rsvp2.getBoundingClientRect().top;
    var revTop3 = rsvp3.getBoundingClientRect().top;
    var revPoint = 100;
    if(revTop1 < windHeight - revPoint){
        rsvp1.classList.add('active');
        rsvp2.classList.add('active');
    }
    else{
        rsvp1.classList.remove('active');
        rsvp2.classList.remove('active');
    }

    if(revTop3 < windHeight - revPoint){
        rsvp3.classList.add('active');
        document.querySelector('.rsvp-title').classList.add('active');

    }
    else{
        rsvp3.classList.remove('active');
        document.querySelector('.rsvp-title').classList.add('active');

    }
}

//hamburger button
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', ()=>{
    document.querySelector('.nav-links-container').classList.toggle('active');
    hamburger.classList.toggle('active');
});

// CODE FOR YEAR UPDATE
(function(){
    const date = new Date();
    var year = date.getFullYear(); 
    document.querySelector('.appyear').innerText = year;
})();
    

"use strict";

const links = document.querySelectorAll('a');

function firstCoord(){
    links.forEach(link => {
        link.style.transitionDuration = 5 + 's';
        link.style.top = 100 + 'px';
        link.style.left = 100 + 'px';
        // console.log(window.innerHeight, window.innerWidth);
    });
}

function newCoord(){
    console.log(this);
    this.style.transitionDuration = Math.floor((Math.random() * 4) + 4) + 's';
    this.style.top = Math.floor(Math.random() * (window.innerHeight - this.offsetHeight)) + 'px';
    this.style.left = Math.floor(Math.random() * (window.innerWidth - this.offsetWidth)) + 'px';
    // console.log(window.innerHeight, window.innerWidth);
    
}

firstCoord();

links.forEach(link => {
    /* window.addEventListener('load', () => {
        console.log('loaded');
    });     */
    link.addEventListener('transitionend', newCoord);

})
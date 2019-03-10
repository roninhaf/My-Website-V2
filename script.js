"use strict";

const links = document.querySelectorAll('a');

function newCoord(){
    this.style.transitionDuration = Math.floor((Math.random() * 4) + 4) + 's';
    this.style.top = Math.floor(Math.random() * (window.innerHeight - this.offsetHeight)) + 'px';
    this.style.left = Math.floor(Math.random() * (window.innerWidth - this.offsetWidth)) + 'px';
}

setTimeout(() => {
    links.forEach(link => {
        link.style.transitionDuration = '0.1s';
        link.style.top = '233px';
        link.style.left = '9px';
    })
}, 10);

links.forEach(link => {link.addEventListener('transitionend', newCoord);});
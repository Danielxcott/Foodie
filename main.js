import './style.scss';
import * as bootstrap from 'bootstrap';
import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";

let options = {
    strings: ['Food ...', 'Drink ...'],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true,
};

let typed = new Typed('.element', options);


let down = {
    distance: '500px',
    origin: 'right',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    opacity: 0,
    rotate: {
        x: 30,
        z: 30
    }
};
ScrollReveal().reveal('.to-down',down);

let drop = {
    distance: '50px',
    origin: 'top',
    duration: 1000,
    interval: 500,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    opacity: 0,
};
ScrollReveal().reveal('.drop',drop);

let left = {
    distance: '500px',
    origin: 'left',
    duration: 300,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 500,
    opacity: 0,
};
ScrollReveal().reveal('.to-left',left);

let swiperight = {
    distance: '50px',
    origin: 'right',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 500,
    opacity: 0,
};
ScrollReveal().reveal('.swipe-right',swiperight);
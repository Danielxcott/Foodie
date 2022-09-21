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

let menuLists = [
    {
        id:1,
        img : "public/img/plate1.png",
        title:"Barbecue Salad",
        description : "Special Delicious Dish",
        price : 22.2,
        currency : "$"
    },
    {
        id:2,
        img : "public/img/plate2.png",
        title:"Salad with fish",
        description : "Special Delicious Dish",
        price : 30.5,
        currency : "$"
    },
    {
        id:3,
        img : "public/img/plate3.png",
        title:"Spinach Salad",
        description : "Special Delicious Dish",
        price : 50,
        currency : "$"
    }
];

let menuRow = document.querySelector("#menu-row");
menuLists.forEach(list=>{
    let div = document.createElement("div");
    div.classList.add("col-12","col-md-4","col-lg-2");
    div.innerHTML =
        `
         <div class="card align-items-center justify-content-center mb-3" style="height: 350px">
                <img src="${list.img}" width="130" height="130" alt="">
                <div class="card-body">
                <p class="fw-bold">${list.title}</p>
                    <p class="text-black-50 small">${list.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="mb-0">${list.currency} ${list.price}</p>
                        <button class="btn btn-primary">
                            <i class="bi bi-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    menuRow.append(div);
})
let myNav = document.querySelector("header");
let first = document.querySelector("#firstlink");
let second = document.querySelector("#secondlink");
let third = document.querySelector("#thirdlink");
let modal = document.querySelector('#contactmodal')



window.onscroll = function () {
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
        myNav.style.backgroundColor = '#C3073F';
        modal.style.backgroundColor = '#1A1A1D';
        modal.style.color = 'white'
        myNav.style.transition = '1s all';
     

    } else {
        myNav.style.backgroundColor = 'transparent';  
        modal.style.backgroundColor = '#C3073F';
        modal.style.color = 'white';
        myNav.style.transition = '1s all'; 
    }
};





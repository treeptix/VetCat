const button = document.querySelector('.aside__nav--button');
const aside = document.querySelector('.aside');
const filter = document.querySelector('.filter');
const main = document.querySelector('.main');
button.addEventListener('click', function () {
            aside.classList.toggle('active');
            filter.classList.toggle('active');
             main.classList.toggle('active');
        });
    
const dropbutton = document.querySelector('.drop__down--btn');
const dropbutton2 = document.querySelector('.drop__down--btn2');
const dropmenu = document.querySelector('.dropdown__menu');  
const dropmenu2 = document.querySelector('.dropdown__menu2');       
dropbutton.addEventListener('click', function () {
 dropmenu.classList.toggle('active');
});
dropbutton2.addEventListener('click', function () {
 dropmenu2.classList.toggle('active');
});

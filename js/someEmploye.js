let wrapper = document.querySelector('.wrapper');
let vidguk = document.querySelector('.someEmploye-vidguk-active');
let readBtns = document.querySelectorAll('.readFull');
let zakryt = document.querySelector('.zakryt');

function showComment(){
    // wrapper.style.display = "none";
    vidguk.style.display = "block";
}

function showPage(){
    // wrapper.style.display = "block";
    vidguk.style.display = "none";
}

readBtns.forEach(btn => {
    btn.addEventListener("click", showComment);
})

zakryt.addEventListener("click", showPage);

// zapys na priyom

let orderTo = document.querySelector('.orderTo');
let overlay2 = document.querySelector('.overlay-appointment');
let closeOverlay2 = document.querySelector('.close-popup-btn2');
let submitBtn2 = document.querySelector('.appointment__agree--btn');

function showPopUpAppointment(){
    overlay2.style.display = "block";
};

function closePopUpAppointment(){
    overlay2.style.display = "none";
};

orderTo.addEventListener('click', showPopUpAppointment);
closeOverlay2.addEventListener('click', closePopUpAppointment);

function submitBtnClick2(){
    overlay2.style.display = "none";
}

// submitBtn.addEventListener('submit', submitBtnClick);

submitBtn2.addEventListener('click', closePopUpAppointment);



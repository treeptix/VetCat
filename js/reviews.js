let vidgukBtn = document.querySelector('.vidguk-btn');
let overlay = document.querySelector('.overlay-review');
let closeOverlay = document.querySelector('.close-popup-btn');
let submitBtn = document.querySelector('.form-review');

function showPopUpReview(){
    overlay.style.display = "block";
};

function closePopUpReview(){
    overlay.style.display = "none";
};

vidgukBtn.addEventListener('click', showPopUpReview);
closeOverlay.addEventListener('click', closePopUpReview);

function submitBtnClick(){
    overlay.style.display = "none";
}

// submitBtn.addEventListener('submit', submitBtnClick);

submitBtn.addEventListener('submit', function(event) {
    event.preventDefault();
    closePopUpReview();
    submitBtn.reset();
});

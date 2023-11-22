

//всі кнопки по послугам
let servicePriceBtns = document.querySelectorAll('.servicePrice-btn');

// all cards
let servicePriceCards = document.querySelectorAll('.service-price-card');

let page404 = document.querySelector('.servicePrice-section-4');

//показує всі картки
function showAllCards() {
    servicePriceCards.forEach(card => {
        card.style.display = 'block';
    });

    page404.style.display = 'none';
}

//функція яка показує лише одну картку по кнопкам
function showOneCard(btn) {
    servicePriceBtns.forEach(btn => {
        btn.classList.remove('servicePrice-btn-active');
    });
    btn.classList.add('servicePrice-btn-active');

    let dataBtnName = btn.dataset.btnName;
    if (dataBtnName == 'all') {
        showAllCards();
        return;
    }

    page404.style.display = 'none';
    let cardFound = false;

    servicePriceCards.forEach(card => {
        card.style.display = 'none';
        let tempName = card.dataset.cardName;
        if (tempName == dataBtnName) {
            card.style.display = 'block';
            cardFound = true;
        }
    });

    if(cardFound == false){
        page404.style.display = 'block';
    }
}

//встановлюємо функціонал на кожну кнопку .servicePrice-btn
servicePriceBtns.forEach(priseBtn => {
    priseBtn.addEventListener('click', () => showOneCard(priseBtn));
})


let servicePriceSearchBtn = document.querySelector('.servicePrice-search-btn');
let servicePriceSearchInput = document.querySelector('.servicePrice-search-input');

//функція показу карток через інпути
function showOneCardInput(name) {

    page404.style.display = 'none';
    let cardFound = false;
    servicePriceCards.forEach(card => {
        card.style.display = 'none';
        let servicePriceCardTitle = card.querySelector('.service-price-card-title');
        let title = servicePriceCardTitle.textContent.trim().toLowerCase();
        if (title == name) {
            card.style.display = 'block';
            cardFound = true;
        }
    });

    if(cardFound == false){
        page404.style.display = 'block';
    }
}

servicePriceSearchBtn.addEventListener('click', () => {
    let inputValue = servicePriceSearchInput.value.toLowerCase();
    showOneCardInput(inputValue);
    servicePriceSearchInput.value = '';
});



let showAllServiceBtn = document.querySelector('.show-all-service-btn');

showAllServiceBtn.addEventListener('click', showAllItems);

function showAllItems(){
    servicePriceBtns.forEach(btn => {
        btn.style.display = "block";
    });

    showAllServiceBtn.style.display = "none";
}
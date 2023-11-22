let showAllEmployeesBtn = document.querySelector('.show-allEmployees-btn');
let employesBtns = document.querySelectorAll('.employe-btn');

showAllEmployeesBtn.addEventListener('click', showAllBtn);

function showAllBtn(){
    employesBtns.forEach(btn => {
        btn.style.display = "block";
    });

    showAllEmployeesBtn.style.display = "none";
}


// -----------------------------------------------------?


// all cards
let cardSpecialist = document.querySelectorAll('.card-specialist');
let page404 = document.querySelector('.allEmployees-section-4');

//показує всі картки
function showAllCards() {
    cardSpecialist.forEach(card => {
        card.style.display = 'block';
    });

    page404.style.display = 'none';
}

//функція яка показує лише одну картку по кнопкам
function showOneCard(btn) {
    employesBtns.forEach(btn => {
        btn.classList.remove('employe-btn-active');
    });
    btn.classList.add('employe-btn-active');

    let dataBtnName = btn.dataset.btnName;
    if (dataBtnName == 'all') {
        showAllCards();
        return;
    }

    page404.style.display = 'none';
    let cardFound = false;

    cardSpecialist.forEach(card => {
        card.style.display = 'none';
        let tempName = card.dataset.cardSpecialty;
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
employesBtns.forEach(employeBtn => {
    employeBtn.addEventListener('click', () => showOneCard(employeBtn));
})


// ------------------------------------------?

let allHospitalBtn = document.querySelector(".all-hospital");
let stroginoHospitalBtn = document.querySelector(".strogino-hospital");
let donskoiHospitalBtn = document.querySelector(".donskoi-hospital");
let employeBtnAll = document.querySelector('.employe-btn-all');

function allHospitalBtnFunction(){
    allHospitalBtn.classList.add('btn-active');
    stroginoHospitalBtn.classList.remove('btn-active');
    donskoiHospitalBtn.classList.remove('btn-active');

    showAllCards();

    employesBtns.forEach(btn => {
        btn.classList.remove('employe-btn-active');
    });
    employeBtnAll.classList.add('employe-btn-active');
}

function stroginoHospitalBtnFunction(){
    stroginoHospitalBtn.classList.add('btn-active');
    allHospitalBtn.classList.remove('btn-active');
    donskoiHospitalBtn.classList.remove('btn-active');

    cardSpecialist.forEach(card => {
        card.style.display = 'none';
        let tempName = card.dataset.cardHospital;
        if (tempName == 'strogino') {
            card.style.display = 'block';
        }
    });

    employesBtns.forEach(btn => {
        btn.classList.remove('employe-btn-active');
    });
    employeBtnAll.classList.add('employe-btn-active');

}

function donskoiHospitalBtnFunction(){
    donskoiHospitalBtn.classList.add('btn-active');
    stroginoHospitalBtn.classList.remove('btn-active');
    allHospitalBtn.classList.remove('btn-active');

    cardSpecialist.forEach(card => {
        card.style.display = 'none';
        let tempName = card.dataset.cardHospital;
        if (tempName == 'donskoi') {
            card.style.display = 'block';
        }
    });

    employesBtns.forEach(btn => {
        btn.classList.remove('employe-btn-active');
    });
    employeBtnAll.classList.add('employe-btn-active');
}

allHospitalBtn.addEventListener('click', allHospitalBtnFunction);
stroginoHospitalBtn.addEventListener('click', stroginoHospitalBtnFunction);
donskoiHospitalBtn.addEventListener('click', donskoiHospitalBtnFunction);

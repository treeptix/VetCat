const stroginoHospital = document.querySelector(".strogino-hospital");
const donskoiHospital = document.querySelector(".donskoi-hospital");
const scheduleCon1 = document.querySelector(".donskoi-schedule-Con");
const scheduleCon2 = document.querySelector(".strogino-schedule-Con");

stroginoHospital.addEventListener("click", () => {
    scheduleCon1.style.display = "block";
    scheduleCon2.style.display = "none";
    donskoiHospital.classList.remove("btn-active");
    donskoiHospital.classList.add("btn-nonactive");
    stroginoHospital.classList.remove("btn-nonactive");
    stroginoHospital.classList.add("btn-active");

});

donskoiHospital.addEventListener("click", () => {
    scheduleCon1.style.display = "none";
    scheduleCon2.style.display = "block";
    stroginoHospital.classList.remove("btn-active");
    stroginoHospital.classList.add("btn-nonactive");
    donskoiHospital.classList.remove("btn-nonactive");
    donskoiHospital.classList.add("btn-active");
});
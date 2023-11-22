let showAllServiceBtn = document.querySelector('.show-all-service-btn');
let gridItems = document.querySelectorAll('.grid-item');

showAllServiceBtn.addEventListener('click', showAllItems);

function showAllItems(){
    gridItems.forEach(item => {
        item.style.display = "block";
    });

    showAllServiceBtn.style.display = "none";
}
const prymorskiButton = document.querySelector('.button__prymorskyi');
const suvorovskiButton = document.querySelector('.button__suvorovski');
const prymorskiContent = document.querySelector('.content__info--prymorski');
const suvorovskiContent = document.querySelector('.content__info--suvorovski');

prymorskiButton.addEventListener('click', function () {
    prymorskiButton.classList.add('active');
    prymorskiContent.classList.add('active');
    suvorovskiButton.classList.remove('active');
    suvorovskiContent.classList.remove('active');
});

suvorovskiButton.addEventListener('click', function () {
    suvorovskiButton.classList.add('active');
    suvorovskiContent.classList.add('active');
       prymorskiButton.classList.remove('active');
     prymorskiContent.classList.remove('active');
});
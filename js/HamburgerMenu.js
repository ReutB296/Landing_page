const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.ulNav');


hamburger.addEventListener('click', () =>{
    navUl.classList.toggle('show');
})



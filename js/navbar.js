
const navbar = document.querySelector('.navContainer');
const navbarText = document.querySelector('.ulNav');
const anchor = document.querySelectorAll('.ulNav a');


window.onscroll = () => {
    if (window.scrollY > 0) { //scroll down is active
        navbar.classList.add('nav-active');
        navbar.classList.remove('nav-notActive');
        navbarText.classList.add('text-black');
        navbarText.classList.remove('text-white');
        anchor.forEach(a =>{
             a.style.color= "black";
             a.classList.add("scroll");
             a.classList.remove("top");
            });
        
        
    } else {
        navbar.classList.remove('nav-active');
        navbar.classList.add('nav-notActive');
        navbarText.classList.add('text-white');
        navbarText.classList.remove('text-black');
        anchor.forEach(a => {
            a.style.color= "white";
            a.classList.add("top");
            a.classList.remove("scroll");
        });
  
    }

};



window.onscroll = () => { // update a color acording to the section we're at 
    if (window.scrollY >=0 &&  window.scrollY <849) {
        anchor[0].style.color= "#f38f67";
        anchor[2].style.color= "white";
    }else{
        if (window.scrollY > 849 ) {
            anchor[2].style.color= "#f38f67";
            anchor[0].style.color= "white";
        }
    }
}


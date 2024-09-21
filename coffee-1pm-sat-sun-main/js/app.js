const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click',() => {
   navLinks.classList.toggle('show');
   if(navLinks.classlist.contains('show')){
    menuIcon.src = "./img/close.svg";
   }else{
    menuIcon.src = "./img.menu.svg";
   }

   
})



const menuHamburguer = document.getElementById('mobileMenu');
const listNav = document.getElementById('listNav');

menuHamburguer.addEventListener('click',()=>{
    listNav.classList.toggle('active')
})
const menuHamburguer = document.getElementById('mobileMenu');
const listNav = document.getElementById('listNav');

menuHamburguer.addEventListener('click',()=>{
    listNav.classList.toggle('active')
})


/* function soma (num1, num2){
    let resultsoma = num1 + num2;
    return resultsoma;
};

console.log(soma(19, 9)) */

navbar = document.querySelector('.navbar')
burger = document.querySelector('.burger')
rightNav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')
navListItem=document.querySelector('.item')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('nav-h');
    navlist.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
})



let toggle = document.querySelector('.nav-toggle');
let navCenter = document.querySelector('.nav-center');
let navEnd = document.querySelector('.nav-end')

toggle.addEventListener('click' , function(){
    navCenter.classList.toggle('nav-active')
    navEnd.classList.toggle('nav-active')
})
let toggle = document.querySelector('.nav-toggle');
let navCenter = document.querySelector('.nav-center');

toggle.addEventListener('click' , function(){
    navCenter.classList.toggle('nav-active')
})

let navFixed = document.querySelector('nav')
let bounce = document.querySelector('.bounce')
let navToggle = document.querySelector('.nav-toggle')
let link = document.querySelector('.link')
let forward = document.querySelectorAll('.forward')
let navHeight = navFixed.getBoundingClientRect().height

window.addEventListener('scroll' , function () {
    let showHeight = window.pageYOffset

    if(showHeight > navHeight){
        navFixed.classList.add('fixed')
        this.document.querySelector('h1').style.cssText += 'padding-top:140px'
    }
    else{
        navFixed.classList.remove('fixed')
        this.document.querySelector('h1').style.cssText += 'padding-top:0px'
    }
    if(showHeight > 500){
        bounce.classList.add('visible')
    }
    else{
        bounce.classList.remove('visible')
    }
})

navToggle.addEventListener('click' , function(){
    link.classList.toggle('active')
})

forward.forEach(function(e){
    e.addEventListener('click' , function(m){
        m.currentTarget.preventDefault
        let id =  m.currentTarget.getAttribute('href').slice(1)
        let position = document.getElementById(id).offsetTop;
        console.log(position)
        console.log(id)

        window.scrollTo({
            left: 0,
            top: position,
        })

        link.classList.toggle('active')
    })
})


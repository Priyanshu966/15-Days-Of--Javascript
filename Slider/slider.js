let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let slides = document.querySelectorAll('.slide')

let counter = 0 ;

slides.forEach(function(slide , index){
    slide.style.left = `${100 * index}%`
})
next.addEventListener('click' , function(){
    counter++
    activate()
    console.log(activate)

})
prev.addEventListener('click' , function(){
    counter--
    activate()
})
function activate(){
    if(counter == 0){
        prev.classList.add('hide')
    }
    else{
        prev.classList.remove('hide')
    }
    if(counter == slides.length - 1){
        next.classList.add('hide')
    }
    else{
        next.classList.remove('hide')
    }
    slides.forEach(function(item){
        item.style.transform = `translateX(-${counter * 100}%)`
    
    })
}

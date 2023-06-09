let btn = document.querySelector('.switch-btn');
let video = document.querySelector('.video-control')
let control = document.querySelector('.switch')
let gif = document.querySelector('.gif-container')


btn.addEventListener('click' , function(){
    if(!control.classList.contains('pad')){
        video.pause()
        control.classList.add('pad')
    }
    else{
        video.play()
        control.classList.remove('pad')
    }
    
})
window.addEventListener("load", function(){
        gif.classList.add("hide");
      });

let btn = document.querySelectorAll('.question-btn')
btn.forEach(function(e){
    e.addEventListener('click' , function(){
        e.parentElement.nextElementSibling.classList.toggle('active1')
        e.firstElementChild.classList.toggle('active2')
        e.lastElementChild.classList.toggle('active1')
        for(x of btn){
            if(x != e){
                x.parentElement.nextElementSibling.classList.remove('active1')
                x.firstElementChild.classList.remove('active2')
                x.lastElementChild.classList.remove('active1') 
            }
        }

    })
 
})
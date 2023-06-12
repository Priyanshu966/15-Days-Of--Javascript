let btns = document.querySelectorAll('.btn')
let textContainer = document.querySelectorAll('.text-container')


btns.forEach(function(e){
    e.addEventListener('click' , function(){
        for(x of btns){
            x.classList.remove('active')
        }
        e.classList.add('active')

        let id = e.dataset.id
        let text = document.getElementById(id)

        textContainer.forEach(function(e){
            e.classList.add('remove')
            e.classList.remove('display')
        })
        text.classList.remove('remove')
        text.classList.add('display')
    

    })
})
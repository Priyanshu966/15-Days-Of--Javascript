let btn = document.getElementById('btn');
let sec = document.getElementById('sec');
let span1 = document.getElementById('span1');
let colors = ['Red' , 'Orange' , 'Yellow' , 'Green' , 'Blue' , 'Indigo' , 'Violet']
btn.addEventListener('click' , colorFlip);

function colorFlip(){
    
    function getRandom(){
        return Math.floor(Math.random() * colors.length )
    }
 
    let randomColor = getRandom()
    sec.style.background = colors[randomColor] ;
    span1.innerHTML = colors[randomColor];

}

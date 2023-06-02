let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let sec = document.getElementById('sec');
let span1 = document.getElementById('span1');
btn.addEventListener('click' , colorFlipper);
function colorFlipper(){
    let hexColor = '#';
    for(let i = 0 ; i < 6 ; i++ ){
        function randomGet(){
            return Math.floor(Math.random() * hex.length)
        }
        let randomNumber = randomGet();
        hexColor += hex[randomNumber] 
    }
    sec.style.background = hexColor
    span1.innerHTML = hexColor
    

}
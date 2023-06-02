let count = 0 ;
let value = document.getElementById('value');
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
increase.addEventListener('click' , function(){
  count++
  value.innerHTML = count
  if(count > 0){
    value.style.color = 'green'
  }
  else if(count == 0){
    value.style.color = 'black'
  }
})
decrease.addEventListener('click' , function(){
  count--
  value.innerHTML = count
  if(count < 0){
    value.style.color = 'red'
  }
  else if(count == 0){
    value.style.color = 'black'
  }
})
reset.addEventListener('click' , function(){
  count = 0
  value.innerHTML = count
  if(count == 0){
    value.style.color = 'black'
  }
})


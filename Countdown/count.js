const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

let giveDate = document.querySelector('.giveaway-cont h4')
let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let mins = document.querySelector('.mins')
let secs = document.querySelector('.secs')

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//Time for giveaway announcement
let futureDate = new Date(tempYear,tempMonth,tempDay + 10,11,30)
console.log(futureDate)

let day = weekdays[futureDate.getDay()]
let date = futureDate.getDate()
let month = months[futureDate.getMonth()]
let year = futureDate.getFullYear()
let hour = futureDate.getHours()
let minute = futureDate.getMinutes()
let futureTime = futureDate.getTime()

giveDate.innerHTML = `Giveaway Ends On ${day}, ${date} ${month} ${year} ${hour}:${minute}am`

function countdown(){
  let today = new Date()
  let currentTime = today.getTime()
  
  let timeRemain = futureTime - currentTime
  
  let oneDay = 24 * 60 * 60 * 1000
  let oneHour = 60 * 60 * 1000
  let oneMin = 60 * 1000
  
  let dayRemain = Math.floor(timeRemain / oneDay)
  let hourRemain = Math.floor((timeRemain % oneDay) / oneHour)
  let minRemain = Math.floor((timeRemain % oneHour) / oneMin)
  let secRemain = Math.floor((timeRemain % oneMin) / 1000)
  
  let time = [dayRemain, hourRemain, minRemain, secRemain]
  let timeCont = [days , hours , mins , secs]

  for(let i = 0 ; i < time.length ; i++ ){
    if(time[i] >= 10){
      timeCont[i].innerHTML = time[i]
    }
    else{
      timeCont[i].innerHTML = `0${time[i]}`
    }
    
  }

  if(timeRemain < 0){
    document.querySelector('.flex-container').innerHTML = `<span>Sorry, the giveaway has expired!</span>`
    clearInterval()
  }
}


setInterval(countdown , 1000);








window.onload = function (){
  localStorage.removeItem('audioTime')
    window.setInterval(function (){
      setBackground()
const date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
if (hours < 10){hours = '0' + hours}
if (minutes < 10){minutes = '0' + minutes}
if (seconds < 10){seconds = '0' + seconds}
let clock = hours + ':' + minutes + ':' + seconds;
document.querySelector('.time').innerHTML = clock
},1000)
  }
  const select = document.querySelector('#lang-choise')
  const date = new Date()
// день недели, месяц и дата
import { months, days } from "./days.js"

function dateDo (){
  const month = months[select.value][date.getMonth()]
  const dayOfWeek = days[select.value][date.getDay()]
  const dayOfMonth = date.getDate()
  if (select.value === 'ru'){ document.querySelector('.date').innerHTML = `${dayOfWeek}, ${dayOfMonth} ${month}` }
  else { document.querySelector('.date').innerHTML = `${dayOfWeek}, ${month} ${dayOfMonth}`}
}
dateDo()


// приветствие 
//получаем дату и часы 
//const date = new Date()
let hours = date.getHours()
//создаем обьекты содержащий приветствие
const partOfGreeting = {
  en : ['Good', 'Good', 'Good', 'Good'],
  ru : ['Доброе', 'Добрый', 'Добрый', 'Доброй']
}
const greeting = { en : ['Morning', 'Afternoon', 'Evening', 'Night'],
                    ru: ['Утро', 'День' , 'Вечер' , 'Ночи']  
                  }
// функция вовзращающая номер периода суток
function getPerioud (){
  if (hours >= 5, hours < 12) {return 0}
  else if (hours >= 12, hours <= 16){return 1}
  else if (hours > 16, hours <= 21) {return 2}
  else {return 3}
}
//присваиваем переменной номер времени суток
let perioud = getPerioud()
// функция выводящвя приветствие на выбранном языке
function greetingInput (){
document.querySelector('.greeting').innerHTML = `${partOfGreeting[select.value][perioud]}  ${greeting[select.value][perioud]} , ` 
}
greetingInput()


 function getTimeOfDay(){ 
  const date = new Date()
  let hours = date.getHours()
  const greeting = ['Morning', 'Afternoon', 'Evening', 'Night']
if (hours >= 5, hours <= 11) {return greeting[0].toLowerCase()}
else if (hours >= 12, hours <= 16){return greeting[1].toLowerCase()}
else if (hours >= 17, hours <= 21){ return greeting[2].toLowerCase()}
else {return greeting[3].toLowerCase()}
}

  const greetingName = document.querySelector('.name')
  function setToLocalStorage () {
    localStorage.setItem('name', greetingName.value)
  }
greetingName.addEventListener('input', setToLocalStorage)
function getFromLocalStorage() {
  greetingName.value = localStorage.getItem('name')
  }
window.addEventListener('load', getFromLocalStorage)


let randomNumber
function getRandomNumber(){
  return randomNumber = Math.floor(Math.random() * 21)
}

let number = getRandomNumber()
function backgroundNumber (){
  if (number < 10){ return number.toString().padStart(2, '0')}
  else {
    return number.toString()
  }
}

function setBackground () {
  const image = new Image()
  const firstPartOfLink = 'https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images' 
  let imageLink = firstPartOfLink + '/' + getTimeOfDay() + '/' + backgroundNumber() + '.' + 'jpg?raw=true'
  image.src = imageLink
  image.onload = () =>{
     document.querySelector('body').style.backgroundImage = `url(${imageLink})` 
     document.querySelector('body').style.display = 'block'
  }}

function getSlideNext(){
  if (number === 20){
    number = 1
  } else {number += 1}
  backgroundNumber()
  setBackground()
}
 
function getSlidePrev(){
  if (number === 1){
    number = 20
  } else {number -= 1}
  backgroundNumber()
  setBackground()
}

const arrowNext = document.querySelector('.slide-next')
const arrowPrev = document.querySelector('.slide-prev') 

arrowNext.addEventListener('click', getSlideNext)
arrowPrev.addEventListener('click', getSlidePrev)

//weather forecast


const city = document.querySelector('.city')

// добавляем значение сити в локальную историю
function weatherToLocalStorage(){
  if(city.value){localStorage.setItem('city',city.value)
  }
  else {
    localStorage.setItem('city', 'Minsk')
  }
}

//вызываем функцию добавления при вводе в инпут
document.querySelector('.city').addEventListener('input', weatherToLocalStorage)

// вызываем значение инпута из локальной истории
function getWeatherLocalStorage(){
 return city.value = localStorage.getItem('city')} //else
 //return city.value = localStorage.getItem('citydefault')}

 //вызываем функцию вызова при перезагрузке страницы

 window.addEventListener('load', getWeatherLocalStorage)
//обьявляем переменные из которых будет строится ссылка на апи
const startOfLink = 'https://api.openweathermap.org/data/2.5/weather'
let nameOfCity = getWeatherLocalStorage()
import { weather } from "./weather.js" 

//вызываем данные из апи
function callBackApi (){
let lang = select.value  
let secondPartOfLink = `?q=${nameOfCity}&lang=${lang}&appid=f54edf653f04120929fda9531a0e2a4e&units=metric`
const containerForErr = document.querySelector('.description-container')
console.log(`${startOfLink}${secondPartOfLink}`)
fetch(`${startOfLink}${secondPartOfLink}`)
.then(function(translate){return translate.json()})
.then(function(data){console.log(data)
const city = document.querySelector('.city')
let weatherIcon
try{weatherIcon = data.weather[0].id}
catch(err){document.querySelector('.temperature').innerHTML = 'Sorry, this city is not exist'}
document.querySelector('.weather-icon').classList.add(`owf-${weatherIcon}`)
document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}${'&deg'}C    ${data.weather[0].description}`
document.querySelector('.wind').innerHTML = `${weather[select.value][0]}: ${Math.round(data.wind.speed)} m/s`
document.querySelector('.humidity').innerHTML = `${weather[select.value][1]}: ${data.main.humidity}%`
})
}
callBackApi()
 

  // получаем рандомный номер цитаты
  let randNum
function getRandomQuote(){
  return Math.floor(Math.random() * 10)
}

let randomQuote = getRandomQuote()
//получаем доступ к json файлу

  async function getQuotes() {
  const src = 'data.json'
  const ready = await fetch(src)
  const data = await ready.json() 
  const theSame = data[select.value][randomQuote]
  document.querySelector('.author').innerHTML = theSame.author
  document.querySelector('.quote').innerHTML = theSame.quote
}
getQuotes()

document.querySelector('.change-quote').addEventListener('click', () => {
  getQuotes()
  if(randomQuote === 0){randomQuote = 9} else {randomQuote -=1}
})


//Audioplayer
// first audio
const audio = new Audio()
const nameOfAudio = Array.from(document.querySelectorAll('.play-item'))

import { playerList } from "./audio.js" 
let audioNumber = 0
function audioPlay(d){
  addVolume()
  audio.src = playerList[audioNumber].src
  audio.play()
  audio.addEventListener('timeupdate', function (){
    localStorage.setItem('audioTime', audio.currentTime)
  })
  audio.currentTime = localStorage.getItem('audioTime')
  document.querySelector('.audio-name').innerHTML = playerList[audioNumber].name
  nameOfAudio[audioNumber].classList.add('item-active')
 }
function audioPause(){
  audio.src = playerList[audioNumber].src
  audio.pause()
  let storedTime = localStorage.getItem('audioTime')
  if(storedTime){audio.currentTime = storedTime}
  }
  

  function changeTrack (){
    if (audioNumber < playerList.length - 1) {
      audioNumber +=1
      nameOfAudio[audioNumber - 1].classList.remove('item-active')
    } else { audioNumber = 0
    nameOfAudio[playerList.length - 1].classList.remove('item-active')
    }
    delete localStorage.audioTime
    audioPlay()
    isPlay = true
    imgPlayer.classList.remove('play'), imgPlayer.classList.add('pause')
    nameOfAudio[audioNumber].classList.add('item-active')
  }

  function changeTrackPrev (){
    if (audioNumber > 0) {
      audioNumber -=1
      nameOfAudio[audioNumber + 1].classList.remove('item-active')
    } else { audioNumber = playerList.length - 1
      nameOfAudio[0].classList.remove('item-active')
    }
    delete localStorage.audioTime
    audioPlay()
    isPlay = true
    imgPlayer.classList.remove('play'), imgPlayer.classList.add('pause')
    nameOfAudio[audioNumber].classList.add('item-active')
  }

let isPlay = false
const imgPlayer = document.querySelector('#playerbutton')

function changeCondition(){
if(isPlay === false){isPlay = true, audioPlay(),imgPlayer.classList.remove('play'), imgPlayer.classList.add('pause') }
else if(isPlay === true){isPlay = false, audioPause(),imgPlayer.classList.add('play'), imgPlayer.classList.remove('pause') }
}

document.querySelector('#playerbutton').onclick = changeCondition;
document.querySelector('.play-next').addEventListener('click', changeTrack) 
document.querySelector('.play-prev').addEventListener('click', changeTrackPrev)
audio.addEventListener('ended', function autonext(){
  setTimeout(
  changeTrack,
  1500 
  )
}
)

const songs = Array.from(document.querySelectorAll('.play-item'))
let innerSongs = songs[audioNumber].innerHTML

// переключать треки по нажатию на них

document.querySelectorAll('.play-item').forEach(el => (e) => {
  if(e.target.innerHTML.includes(`${playerList[audioNumber].name}`)){
  audioPlay()
  }
})


// progressBar

audio.src = playerList[audioNumber].src
const progressBarContainer = document.querySelector('.progress-bar')
const progressBar = document.querySelector('.progress')

audio.addEventListener('timeupdate', function progress (){
  const duration = audio.duration
  let currentTime = audio.currentTime
  let progress = (currentTime / duration) * 100
  progressBar.style.width = progress + '%' 
  progressBarContainer.style.display = 'block'
  progressBar.style.display = 'block'
})
progressBarContainer.addEventListener('click', function(event){
  const mouseX = event.pageX - progressBarContainer.offsetLeft
  const width = progressBarContainer.clientWidth
  const duration = audio.duration
  const seekTime = (mouseX / width) * duration
  audio.currentTime = seekTime
})

// регулировка звука аудио

const volumeSlider = document.querySelector('#volume-Slider')

volumeSlider.oninput = function volumeReg () {
  audio.volume = this.value
}
const volumeNoImage = document.querySelector('.volume-no-img')
const volumeImage = document.querySelector('.volumeImg')
volumeImage.classList.add('forVolumeImages')

function deleteVolume(){
  volumeImage.classList.add('forVolumeImages')
  volumeNoImage.classList.remove('forVolumeImages')
  audio.volume = 0}
 function addVolume(){
  volumeImage.classList.remove('forVolumeImages')
  volumeNoImage.classList.add('forVolumeImages')
  audio.volume = volumeSlider.value 
}
 
volumeNoImage.addEventListener('click', addVolume)
volumeImage.addEventListener('click', deleteVolume)

//выведение текущей длительности и полной длительности трека

const durationBlock = document.querySelector('.duration')

audio.addEventListener('timeupdate',function getDuration (){
  setInterval(function(){
  const time = Math.floor(localStorage.getItem('audioTime'))
  if (time < 10) {durationBlock.innerHTML = `0.0${time} / ${playerList[audioNumber].duration}`}
  else if (time > 10, time < 60 ){durationBlock.innerHTML = `0.${time} / ${playerList[audioNumber].duration}`}
  else if (time > 60, time < 70){durationBlock.innerHTML = `1.0${time - 60} / ${playerList[audioNumber].duration}`}
  durationBlock.style.display = 'block'
}, 1000)})


select.addEventListener('change', function (){
  getQuotes()
  greetingInput()
  callBackApi()
  dateDo()
})


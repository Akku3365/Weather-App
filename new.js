const API_KEY = `3cdddecda993176846fd09f67198fb4e`
const mainTag = document.querySelector("main")
const searchTag = document.querySelector("#search")
const weatherTag = document.querySelector("#weather")
const btnTag = document.querySelector("button");

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const autherText = document.getElementById('auther');
const nextBtn = document.getElementById('next-quote');
const tweetBtn = document.getElementById('tweet-quote');
const loaderTag = document.getElementById('loader');

let apiQuotes = [];
// console.log(btnTag)

// console.log(formTag)
// console.log(searchTag)
// console.log(weatherTag)

const getWeather = async (city)=> {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response =await fetch(url);
  const data = await response.json();
//   console.log(data);
  return showWeather(data);
}

function getNewQuotes(){
  const newQuotes = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
  quoteText.textContent = newQuotes.text;
  autherText.textContent = newQuotes.author;
  // hideLoader();
}

function getQuotes(){
  // showLoader();
  const apiUrl = "https://type.fit/api/quotes";
  setTimeout(()=>{
      fetch(apiUrl)  // Get request
      .then((response)=>{
         return response.json()
      })
      .then((response)=>{
         apiQuotes = response;

         console.log("API loading is done")
         console.log(apiQuotes[0]);
          getNewQuotes();
      })
      .catch((err)=>{
         console.log(err);
      })
  },3000)
   
}
getQuotes();

function tweetQuotes(){
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.innerText}`;
  window.open(twitterURL, "_blank");
}

const showWeather = (data) => {
    console.log(data)
    weatherTag.innerHTML = 
    `<div>
       <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      </div>
    <div>
       <p>Temp:  ${data.main.temp} °C</p>
       <p>Humidity:   ${data.main.humidity}</p>
        <p>${data.weather[0].description}</p>
    </div>`
}

btnTag.addEventListener(
  "click",
  function(event){
    getWeather(searchTag.value)
  }
)
nextBtn.addEventListener('click', getNewQuotes);
tweetBtn.addEventListener('click', tweetQuotes);
// btnTag.addEventListener('click', getWeather)

















// function showLoader(){
//     loaderTag.hidden = false;
//     quoteContainer.hidden = true;
// }

// function hideLoader(){
//     loaderTag.hidden = true;
//     quoteContainer.hidden = false;
// }





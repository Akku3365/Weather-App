const API_KEY = `3cdddecda993176846fd09f67198fb4e`
const mainTag = document.querySelector("main")
const searchTag = document.querySelector("#search")
const weatherTag = document.querySelector("#weather")
const btnTag = document.querySelector("button");
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
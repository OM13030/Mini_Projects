const apikey =  "0af003ec27596ab8539ca0258603c5f7";

const apiurl = `https://api.openweathermap.org/data/2.5/weather?&appid=0af003ec27596ab8539ca0258603c5f7&units=metric`;
let city1 = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind")
let searchbox = document.querySelector(".search input")
let searchbtn = document.querySelector(".search button")
let weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&appid=0af003ec27596ab8539ca0258603c5f7&units=metric&q=${city}`); 
    var data = await response.json();
    console.log(data);
    city1.innerHTML = data.name;  
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h"; 
    
    let weatherdata = data.weather[0].main;
    if(weatherdata == "Clouds"){
        weathericon.src = "images/clouds.png";
    }else if(weatherdata == "Clear"){
        weathericon.src = "images/clear.png";
    }else if(weatherdata == "Drizzle"){
        weathericon.src = "images/drizle.png";
    }else if(weatherdata == "Mist"){
        weathericon.src = "images/mist.png";
    }else if(weatherdata == "Rain"){
        weathericon.src = "images/rain.png";
    }else if(weatherdata == "Snow"){
        weathericon.src = "images/snow.png";
    }else {

    }
    
}

searchbtn.addEventListener("click", () =>{
    checkweather(searchbox.value);
    console.log(searchbox.value);
});


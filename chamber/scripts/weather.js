const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const forecastContainer = document.querySelector("#forecast");


// Poza Rica, Veracruz

const lat = 20.53;
const lon = -97.46;


const apiKey = "a903f278043794483b7e00e290e22a66";


const currentURL =
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;


const forecastURL =
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;



async function getWeather() {


    try {


        const response = await fetch(currentURL);



        if (!response.ok) {

            throw new Error("Unable to load current weather.");

        }



        const data = await response.json();


        displayCurrentWeather(data);



    } catch (error) {


        console.error(error);


    }


}





async function getForecast() {


    try {


        const response = await fetch(forecastURL);



        if (!response.ok) {

            throw new Error("Unable to load forecast data.");

        }



        const data = await response.json();


        displayForecast(data);



    } catch (error) {


        console.error(error);


    }


}




function displayCurrentWeather(data) {


    if (!currentTemp || !weatherIcon || !captionDesc) return;



    currentTemp.textContent =
        `${Math.round(data.main.temp)}°C`;



    const iconSrc =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;



    weatherIcon.src = iconSrc;

    weatherIcon.alt =
        data.weather[0].description;



    captionDesc.textContent =
        data.weather[0].description;



}




function displayForecast(data) {


    if (!forecastContainer) return;



    forecastContainer.innerHTML = "";



    const forecast = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );



    forecast.slice(0, 3).forEach(day => {



        const li = document.createElement("li");



        const date = new Date(day.dt_txt);



        li.textContent =
            `${date.toLocaleDateString("en-US", {
                weekday: "short"
            })}: ${Math.round(day.main.temp)}°C`;



        forecastContainer.appendChild(li);



    });



}




getWeather();

getForecast();
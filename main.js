const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "371b232c76msh8415c2f4ce1017fp190934jsn9364e65abc70",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
    options
  )
    .then((response) => response.json())
    .then((response) => {


      // console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp1.innerHTML = response.temp;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity1.innerHTML = response.humidity;
	  
      wind_speed.innerHTML = response.wind_speed;
      wind_speed1.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;

      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;

    })
    .catch((err) => console.error(err));
};


getWeather("Sangli");

searchBtn.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value);
})

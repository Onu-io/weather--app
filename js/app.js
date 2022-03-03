const API_KEY = `fe02f87fa2883f71d0c127674c0954e0
`;



const searchTemp = ()=>{
    const cityInfo = document.getElementById('city-name');
    const city = cityInfo.value;
    cityInfo.value = ''
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerText =(id, text) =>{
    document.getElementById(id).innerText = text;
}



const displayTemperature = temperature =>{
    console.log(temperature);
    setInnerText('city',temperature.name)
    setInnerText('temp',temperature.main.temp)
    setInnerText('feelslike',temperature.main.feels_like)
    setInnerText('lowest',temperature.main.temp_min)
    setInnerText('max',temperature.main.temp_max)
    setInnerText('wind',temperature.wind.deg)
    setInnerText('wind-speed',temperature.wind.speed)
    setInnerText('condition',temperature.weather[0].main)
   
    setInnerText('wind-pressure',temperature.main.pressure)
    


    // set weather icon

     const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
     const imgIcon = document.getElementById('weather-icon');
     imgIcon.setAttribute('src',url);

    

}

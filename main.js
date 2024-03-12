async function celcius() {
    $(".selection").animate({position: "absolute", right: "42px"})
    localStorage.setItem("type", "c")
    let response = await fetch("https://api.weatherapi.com/v1/current.json?key=8b42688e98e24461b93182326241002&q=Bharuch&aqi=no");
    let data = await response.text();
    let array = JSON.parse(data)
    let keys = Object.keys(array);
    let val = array[keys[1]];
    $(".temperature").html(`${parseInt(val.temp_c, 10)} <sup class='tempType' >°C</sup>`)
  }
  
  async function farenheit() {
    $(".selection").animate({position: "absolute", right: "2.8px"})
    localStorage.setItem("type", "f")
    let response = await fetch("https://api.weatherapi.com/v1/current.json?key=8b42688e98e24461b93182326241002&q=Bharuch&aqi=no");
    let data = await response.text();
    let array = JSON.parse(data)
    let keys = Object.keys(array);
    let val = array[keys[1]];
    $(".temperature").html(`${parseInt(val.temp_f, 10)} <sup class='tempType' >°F</sup>`)
  }
  
  const Time = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay() - 1;
    let weekday = new Array(7);
    weekday[6] = "Sunday";
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    $(".time").html(`${weekday[day]} ${hours}:${minutes}`);
  }

  Time()
  
  const changeColor = () => {
    let date = new Date();
    let hours = date.getHours();
    if(hours > 18) {
      document.querySelector("body").setAttribute("style", "background: #28284D!important;")
      document.querySelector(".sun").setAttribute("style", "background: #7171D0!important;")
      document.querySelector(".otherInfo").setAttribute("style", "background: #7171D0!important;")
      document.querySelector(".type").setAttribute("style", "background: #1C1C36!important;")
      document.querySelector(".celcius").setAttribute("style", "color: #fff!important;")
      document.querySelector(".farenheit").setAttribute("style", "color: #fff!important;")
      document.querySelector(".temperature").setAttribute("style", "color: #fff!important;")
      document.querySelector(".percipitation").setAttribute("style", "color: #fff!important;")
      document.querySelector(".humidity").setAttribute("style", "color: #fff!important;")
      document.querySelector(".one").setAttribute("style", "color: #ddd!important;")
      document.querySelector(".two").setAttribute("style", "color: #ddd!important;")
      document.querySelector(".three").setAttribute("style", "color: #ddd!important;")
      document.querySelector(".windSpeed").setAttribute("style", "color: #fff!important;")
      document.querySelector(".selection").setAttribute("style", "background: #3D3D75!important;")
    }
  }
  
  setTimeout(changeColor(), 1000)
  
  async function temperature() {
    let response = await fetch("https://api.weatherapi.com/v1/current.json?key=8b42688e98e24461b93182326241002&q=Bharuch&aqi=no");
    let data = await response.text();
    let array = JSON.parse(data)
    let keys = Object.keys(array);
    let val = array[keys[1]];
    
    let temperature;
    let cond = val.condition.text;
    let perc = val.precip_mm
    let humidity = val.humidity;
    let windSpeed = val.wind_kph;
  
    $(".temperature").html(`${parseInt(val.temp_c, 10)} <sup class='tempType' >°C</sup>`)
    $(".condition").text(cond)
    $(".percipitation").text(`${perc} mm`)
    $(".humidity").text(`${humidity}%`)
    $(".windSpeed").text(`${windSpeed} km/h`)
  
    if (localStorage.getItem("type") === "c") {
      temperature = parseInt(val.temp_c, 10);
      $(".temperature").html(`${temperature} <sup class='tempType' >°C</sup>`)
      $(".selection").animate({position: "absolute", right: "42px"})
    } else if (localStorage.getItem("type") === "f") {
      temperature = parseInt(val.temp_f, 10);
      $(".selection").animate({position: "absolute", right: "2.8px"})
      $(".temperature").html(`${temperature} <sup class='tempType' >°F</sup>`)
    }
  }
  
  temperature()
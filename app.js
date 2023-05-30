let weather = {
    apikey:"b1a43537ff3073e4e98af47adbb9d56d",
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city 
        +"&units=metric&appid="
        +this.apikey
        ).then((Response)=>Response.json())
        .then((data)=>this.fetchDisplay(data))
    },
    fetchDisplay : function(data){
       const { name }=data;
       const { icon ,description}= data.weather[0];
       const { temp , humidity }=data.main;
       const { speed }= data.wind;
      document.querySelector(".city").innerHTML=`Weather in ${name}`
      document.querySelector(".temp").innerHTML=`${Math.floor(temp)}°C`
      document.querySelector(".icon").src =`https://openweathermap.org/img/wn/${icon}@2x.png`
      document.querySelector(".description").innerHTML=` ${description}`
      document.querySelector(".humidity").innerHTML=`humidity : ${humidity}`
      document.querySelector(".wind").innerHTML=`wind speed : ${speed} Km/h`
      document.querySelector('.weather').classList.remove('loading')
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search_bar").value)
    }  
}

document.querySelector(".search button").addEventListener("click", function(){
  weather.search()
})

document.querySelector(".search_bar").addEventListener("keyup",(event)=>{
   if(event.key=="Enter"){
     weather.search()
   }
})

weather.fetchWeather('delhi')
var input = document.getElementById("place")
var link = "https://api.openweathermap.org/data/2.5/weather?q="
var country = document.getElementById("country")
var state = document.getElementById("state")
var temperature = document.getElementById("temperature")
var img = document.getElementById("img")
var iconTemp = document.getElementById("icon-temp")
var flag = document.getElementById("flag")

async function submit(){
    let place = input.value
    let url = link + place + "&APPID=4517b7137373eb93c8b5f61849b8f94a"
    let info = await fetch(url)
    let data = await info.json()
    country.innerHTML = data.sys.country + ", " +  data.name
    flag.src= "flags/" + data.sys.country + ".svg"
    console.log("flags/" + data.sys.country.toLowerCase() + ".svg")
    state.innerHTML = data.weather[0].main 
    iconTemp.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    
    temperature.innerHTML = (data.main.temp - 273.15).toString().substring(0,4) + " ºC"
    console.log(data)
}
document.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        submit()
    }
})



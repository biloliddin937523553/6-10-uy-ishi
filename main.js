const inp = document.getElementById('inp')
const btn = document.getElementById('btn')
const cityName = document.getElementById('cityName')
const gradus = document.getElementById('gradus')
const des = document.getElementById('des')
const img1 = document.getElementById('img1')
let img = ''

const getData = async(city)=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d58082d2702339083a04cf97256b417f`)
    const data = await res.json()
    return data
}

btn.addEventListener('click', ()=>{

    

    getData(inp.value).then(data=>{
        console.log(data);
        cityName.innerHTML = data.name
        gradus.innerHTML =Math.round( data.main.temp) + ` C°`

        des.innerHTML = data.weather[0].description

        img1.setAttribute('src' , `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        data.weather[0].icon = img
    })
    
})
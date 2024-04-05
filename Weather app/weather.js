document.addEventListener('DOMContentLoaded', function() {

let id = 'a9da20a2a02ebf81a494ebe69d521b06';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let main = document.querySelector('main');

let form = document.querySelector('form')
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    if (valueSearch.value != ''){
        searchWeather();
    }
})



const searchWeather= () =>{
    fetch(url + '&q=' + valueSearch.value)
    .then(responsive => responsive.json())
    .then(data =>{
        console.log(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;

            temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            temperature.querySelector('span').innerText = data.main.temp;
            description.innerText = data.weather[0].description;

            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
        }else{
            main.classList.add('error');
            setTimeout(() => {
                main.classList.remove('error');
            }, 1000);
        }


        valueSearch.value = '';


    })
}

// search Default
const initApp = () => {
    valueSearch.value = 'Malaysia';
    searchWeather();
};
    initApp();

});

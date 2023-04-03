

function search(){
    // get value from text box
    let location = loc.value
console.log(location);
    // fetch api
    fetch(`http://api.weatherapi.com/v1/current.json?key=0abfc849ac024c3f87845231230304&q=${location}&aqi=no`)
   // https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=df556c7c5db166f2afe9cb36ed8f3d0e
    .then((result)=>{
result.json()
.then((data)=>{
    console.log(data);
weatherData(data)
})
    })

}
function weatherData(data){
    let temperature= (data.current['temp_c'])
//   data.main['temp'].splice(2)
    
    let hum= data.current['humidity']
    console.log(hum);
    let win= data.current['wind_mph']
    let pre=data.current['pressure_mb']
    let cit=data.location.name 
    temp_c.innerHTML =`${temperature}&#176;`
    city.innerHTML=`${cit}`
    humidity.innerHTML= hum
    wind_mph.innerHTML = win
    pressure_mb.innerHTML=pre
    
  
}
// weather.innerHTML=weatherData()



// function search(value) {
//     // get value from text box
//     let location = loc.value;
//     console.log(location);
//     // fetch api
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=df556c7c5db166f2afe9cb36ed8f3d0e`)
//       .then((result) => {
//         if (!result.ok) {
//           throw new Error('Network response was not ok');
//         }
//         result.json().then((data) => {
//           console.log(data);
//           if (data.main && data.wind) {
//             weatherData(data);
//           } else {
//             console.error('Weather data not available');
//           }
//         });
//       })
//       .catch((error) => {
//         console.error('Fetch error:', error);
//       });
//   }
  
//   function weatherData(data) {
//     let temperature = data.main['temp'];
//     let hum = data.main['humidity'];
//     let win = data.wind['speed'];
//     let pre = data.main['pressure'];
  
//     temp.innerHTML = `${temperature}&#176;`;
//     humidity.innerHTML = hum;
//     wind.innerHTML = win;
//     pressure.innerHTML = pre;
//   }
  

// Define Variables
var transPick =""
var cityPicked=[];
var storedCity=[];
var cityCount=0;
var chooseCity = " ";
var citySave=""
var fiveDayIcon=[]
var fiveDayTemp=[]
var fiveDayTempF=[]
var fiveDayHumid=[]
var iconLink=[]
var iconBegin = "http://openweathermap.org/img/wn/"
var iconEnd = "@2x.png"
var step = 0;
var linkBuild =""
var uvLink="https://api.openweathermap.org/data/2.5/onecall?lat="
var uvMid="&lon="
var uvlinkBuild=""
var uvDex = 0;
dataURL ="https://api.openweathermap.org/data/2.5/weather?q=";
trailURL="&appid=bd61ef1d733089162a77b7578f04dddc"
comboURL=""
finalURL=""
fiveURL = "https://api.openweathermap.org/data/2.5/forecast?q="
fcomboURL=""
secondURL=""
let kelvinTemp = 0;
let localHumid = 0;
let windSpeed = 0;

// conversion code Courtesy brettvaida GitHub Gist.
let tempConvert =function(){
// console.log("KT " + kelvinTemp)
const celsius = kelvinTemp - 273;
let fahrenheit = Math.floor(celsius * (9/5) + 32);

// Displaying the temperature using string interpolation
// console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
return fahrenheit;
}

// User selects city

$( "#findCity" ).click(function() {
step=0;
let chooseCity = $("#chosenCity").val();
let comboURL = dataURL.concat(chooseCity);
let finalURL = comboURL.concat(trailURL);
// document.getElementById("cityStats").innerHTML = chooseCity;
fetch(finalURL).then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    kelvinTemp = data.main.temp;
    localHumid = data.main.humidity;
    windSpeed = data.wind.speed;
    lati = data.coord.lat;
    long = data.coord.lon;
    ucomboURL = uvLink.concat(lati);
    mcomboURL = ucomboURL.concat(uvMid)
    linkBuild = mcomboURL.concat(long);
    uvlinkBuild = linkBuild.concat(trailURL)
    console.log(uvlinkBuild)
    fetch(uvlinkBuild).then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        uvDex = data.current.uvi;
        console.log("uvIndex: " + uvDex);
    // console.log("temp in Kelvin " + kelvinTemp);
    // console.log("Humidity: " + localHumid);
    // console.log("Wind Speed: " + windSpeed);

  });

//   let ucomboURL = uvLink.concat(lati);
//   let mcomboURL = ucomboURL.concat(uvMid)
//   let linkBuild = mcomboURL.concat(long);
//   let uvlinkBuild =linkBuild.concat(trailURL)
  
// document.getElementById("cityStats").innerHTML = chooseCity;
fetch(uvlinkBuild).then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
    
    // console.log("Humidity: " + localHumid);
    // console.log("Wind Speed: " + windSpeed);

  });
  
  


let fcomboURL = fiveURL.concat(chooseCity);
let secondURL = fcomboURL.concat(trailURL);

  fetch(secondURL).then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    
    for (i=0; i<5; i++){
        // console.log ("iteration: "+ i)
        fiveDayIcon[i] = data.list[step].weather[0].icon;
        // console.log("Icon Number "+ fiveDayIcon[i]);
        fiveDayTemp[i] = data.list[step].main.temp;
        // console.log("temp is " + fiveDayTemp[i]);
        fiveDayHumid[i] = data.list[step].main.humidity;
        // console.log("humidity is " + fiveDayHumid[i]);
        // console.log("step is " + step)
        step += 8;
        linkBuild=iconBegin.concat(fiveDayIcon[i]);
        iconLink[i]=linkBuild.concat(iconEnd)
        // console.log("icon link: " + iconLink[i])

//let fahrenheitToKelvin = tempConvert(data.main.temp)

    }
    tempConvert();
    dateCalc();
  });
//  Save Chosen City to Local Storage
console.log(chooseCity);
console.log(finalURL);
localStorage.setItem("storedCity[cityCount]", chooseCity);
transPick = localStorage.getItem("storedCity[cityCount]");
console.log("retained city:" + storedCity[cityCount])
cityPicked[cityCount] = transPick;
cityCount++;
console.log(cityCount);
console.log("city Picked is: " + transPick);

if (cityCount > 9){cityCount = 0}



document.getElementById("cityZro").innerHTML = cityPicked[0];
document.getElementById("cityOne").innerHTML = cityPicked[1];
document.getElementById("cityTwo").innerHTML = cityPicked[2];
document.getElementById("cityTre").innerHTML = cityPicked[3];
document.getElementById("cityFor").innerHTML = cityPicked[4];
document.getElementById("cityFiv").innerHTML = cityPicked[5];
document.getElementById("citySix").innerHTML = cityPicked[6];
document.getElementById("citySev").innerHTML = cityPicked[7];
document.getElementById("cityEig").innerHTML = cityPicked[8];
document.getElementById("cityNin").innerHTML = cityPicked[9];
});
});



const dateCalc = function() {
var todayDate = moment().format("MM DD YY");
var addSpace = chooseCity.concat(" ");
var timeNow = addSpace.concat(todayDate);
tempConvert();
const celsius = kelvinTemp - 273;
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
document.getElementById("cityName").innerHTML = chooseCity +"  "+ timeNow;
// document.getElementById("cityDate").innerHTML = timeNow;
document.getElementById("cityTemp").innerHTML = "Temperature: " + fahrenheit + " Degrees";
document.getElementById("cityHumid").innerHTML = "Humidity: " + localHumid + "%";
document.getElementById("cityWind").innerHTML = "Wind Speed: " + windSpeed + " MPH";
document.getElementById("uvIndex").innerHTML = "UV Index: " + uvDex;

if (uvDex > 3 && uvDex <6){
    document.getElementById("uvIndex").style.backgroundColor = "yellow"
} else if (uvDex > 5 && uvDex < 8){
    document.getElementById("uvIndex").style.backgroundColor = "orange"  
} else if (uvDex > 7){
    document.getElementById("uvIndex").style.backgroundColor = "red"  
} else {
    document.getElementById("uvIndex").style.backgroundColor = "white" 
}
const day1 = moment(todayDate, "MM DD YY").add(1, 'days').format("MM DD YY");
const day2 = moment(todayDate, "MM DD YY").add(2, 'days').format("MM DD YY");
const day3 = moment(todayDate, "MM DD YY").add(3, 'days').format("MM DD YY");
const day4 = moment(todayDate, "MM DD YY").add(4, 'days').format("MM DD YY");
const day5 = moment(todayDate, "MM DD YY").add(5, 'days').format("MM DD YY");
document.getElementById("dayOne").innerHTML = day1;
document.getElementById("dayTwo").innerHTML = day2;
document.getElementById("dayTre").innerHTML = day3;
document.getElementById("dayFor").innerHTML = day4;
document.getElementById("dayFiv").innerHTML = day5;

document.getElementById("iconOne").src = iconLink[0];
document.getElementById("iconTwo").src = iconLink[1];
document.getElementById("iconTre").src = iconLink[2];
document.getElementById("iconFor").src = iconLink[3];
document.getElementById("iconFiv").src = iconLink[4];
for (i=0; i<5; i++){
    const celsius = fiveDayTemp[i] - 273;
    let fahrenheit = Math.floor(celsius * (9/5) + 32);
    fiveDayTempF[i] = fahrenheit
}

document.getElementById("tempOne").innerHTML = "Temp: " + fiveDayTempF[0] + " Deg."
document.getElementById("tempTwo").innerHTML = "Temp: " + fiveDayTempF[1] + " Deg."
document.getElementById("tempTre").innerHTML = "Temp: " + fiveDayTempF[2] + " Deg."
document.getElementById("tempFor").innerHTML = "Temp: " + fiveDayTempF[3] + " Deg."
document.getElementById("tempFiv").innerHTML = "Temp: " + fiveDayTempF[4] + " Deg."

document.getElementById("humidOne").innerHTML = "Humidity: " + fiveDayHumid[0]+"%";
document.getElementById("humidTwo").innerHTML = "Humidity: " + fiveDayHumid[1]+"%";
document.getElementById("humidTre").innerHTML = "Humidity: " + fiveDayHumid[2]+"%";
document.getElementById("humidFor").innerHTML = "Humidity: " + fiveDayHumid[3]+"%";
document.getElementById("humidFiv").innerHTML = "Humidity: " + fiveDayHumid[4]+"%";
console.log(timeNow);
}


// var chooseCity="Chicago"
var transPick =""
var cityPicked=[];
var storedCity=[];
var cityCount=0;
var chooseCity = " ";
var citySave=""
var fiveDayIcon=[]
var fiveDayTemp=[]
var fiveDayHumid=[]
var step = 0;

dataURL ="http://api.openweathermap.org/data/2.5/weather?q=";
trailURL="&appid=bd61ef1d733089162a77b7578f04dddc"
comboURL=""
finalURL=""
fiveURL = "http://api.openweathermap.org/data/2.5/forecast?q="
fcomboURL=""
secondURL=""
let kelvinTemp = 0;
let localHumid = 0;
let windSpeed = 0;

//KT as a param
let tempConvert =function(){
// conversion code Courtesy brettvaida GitHub Gist.
// Celsius is 273 degrees less than Kelvin
console.log("KT " + kelvinTemp)
const celsius = kelvinTemp - 273;
// Calculating Fahrenheit temperature to the nearest integer

let fahrenheit = Math.floor(celsius * (9/5) + 32);
// Displaying the temperature using string interpolation
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
return fahrenheit;
}

// User selects city

$( "#findCity" ).click(function() {

let chooseCity = $("#chosenCity").val();
let comboURL = dataURL.concat(chooseCity);
let finalURL = comboURL.concat(trailURL);

fetch(finalURL).then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    kelvinTemp = data.main.temp;
    localHumid = data.main.humidity;
    windSpeed = data.wind.speed;
    console.log("temp in Kelvin " + kelvinTemp);
    console.log("Humidity: " + localHumid);
    console.log("Wind Speed: " + windSpeed);
    
    //let KT = data.main.temp;
    //KT as a argument
    tempConvert();
    // console.log(" they got this " + fahrenheit)
    dateCalc();
  });


let fcomboURL = fiveURL.concat(chooseCity);
let secondURL = fcomboURL.concat(trailURL);

  fetch(secondURL).then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
    for (i=0; i<5; i++){
        console.log ("iteration: "+ i)
        fiveDayIcon[i] = data.list[step].weather[0].icon;
        console.log("Icon Number "+ fiveDayIcon[i]);
        fiveDayTemp[i] = data.list[step].main.temp;
        console.log("temp is " + fiveDayTemp[i]);
        fiveDayHumid[i] = data.list[step].main.humidity;
        console.log("humidity is " + fiveDayHumid[i]);
        console.log("step is " + step)
        step += 8;
        

//let fahrenheitToKelvin = tempConvert(data.main.temp)

    }
    tempConvert();
    dateCalc();
  });

console.log(chooseCity);
console.log(finalURL);

localStorage.setItem("storedCity[cityCount]", chooseCity);
transPick = localStorage.getItem("storedCity[cityCount]");
console.log("retained city:" + transPick)
cityPicked[cityCount] = transPick;
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
cityCount++;
console.log(cityCount);
console.log("city Picked is: " + transPick);

if (cityCount > 9){cityCount = 0}

});




const dateCalc = function() {
var todayDate = moment().format("MM DD YY");
var addSpace = chooseCity.concat(" ");
var timeNow = addSpace.concat(todayDate);
tempConvert();
document.getElementById("cityName").innerHTML = chooseCity;
document.getElementById("cityDate").innerHTML = timeNow;
// document.getElementById("cityTemp").innerHTML = "Temperature: " + fahrenheit + " Degrees";
document.getElementById("cityHumid").innerHTML = "Humidity: " + localHumid + "%";
document.getElementById("cityWind").innerHTML = "Wind Speed: " + windSpeed + " MPH";
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

document.getElementById("iconOne").innerHTML = "icon";
document.getElementById("iconTwo").innerHTML = "icon";
document.getElementById("iconTre").innerHTML = "icon";
document.getElementById("iconFor").innerHTML = "icon";
document.getElementById("iconFiv").innerHTML = "icon";

document.getElementById("tempOne").innerHTML = "temp";
document.getElementById("tempTwo").innerHTML = "temp";
document.getElementById("tempTre").innerHTML = "temp";
document.getElementById("tempFor").innerHTML = "temp";
document.getElementById("tempFiv").innerHTML = "temp";

document.getElementById("humidOne").innerHTML = fiveDayHumid[0];
document.getElementById("humidTwo").innerHTML = fiveDayHumid[1];
document.getElementById("humidTre").innerHTML = fiveDayHumid[2];
document.getElementById("humidFor").innerHTML = fiveDayHumid[3];
document.getElementById("humidFiv").innerHTML = fiveDayHumid[4];
console.log(timeNow);
}


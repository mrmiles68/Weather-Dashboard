// var chooseCity="Chicago"
var transPick =""
var cityPicked=[];
var storedCity=[];
var cityCount=0
$( "#findCity" ).click(function() {

let chooseCity = $("#chosenCity").val();
console.log(chooseCity);
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
console.log("city Picked is: " + cityPicked[cityCount]);
if (cityCount > 9){cityCount = 0}

});

const dateCalc = function() {
var todayDate = moment().format("MM DD YY");
var addSpace = chooseCity.concat(" ");
var timeNow = addSpace.concat(todayDate);
document.getElementById("cityName").innerHTML = timeNow;
const day1 = moment(todayDate, "MM DD YY").add(1, 'days');
const day2 = moment(todayDate, "MM DD YY").add(2, 'days');
const day3 = moment(todayDate, "MM DD YY").add(3, 'days');
const day4 = moment(todayDate, "MM DD YY").add(4, 'days');
const day5 = moment(todayDate, "MM DD YY").add(5, 'days');
document.getElementById("dayOne").innerHTML = day1;
document.getElementById("dayTwo").innerHTML = day2;
document.getElementById("dayTre").innerHTML = day3;
document.getElementById("dayFor").innerHTML = day4;
document.getElementById("dayFiv").innerHTML = day5;

document.getElementById("icon1").innerHTML = "icon";
document.getElementById("icon2").innerHTML = "icon";
document.getElementById("icon3").innerHTML = "icon";
document.getElementById("icon4").innerHTML = "icon";
document.getElementById("icon5").innerHTML = "icon";

document.getElementById("temp1").innerHTML = "temp";
document.getElementById("temp2").innerHTML = "temp";
document.getElementById("temp3").innerHTML = "temp";
document.getElementById("temp4").innerHTML = "temp";
document.getElementById("temp5").innerHTML = "temp";

document.getElementById("humid1").innerHTML = "humid";
document.getElementById("humid2").innerHTML = "humid";
document.getElementById("humid3").innerHTML = "humid";
document.getElementById("humid4").innerHTML = "humid";
document.getElementById("humid5").innerHTML = "humid";
console.log(timeNow);
}
// dateCalc();
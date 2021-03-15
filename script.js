// var chooseCity="Chicago"
var transPick =""
var cityPicked=[];
var storedCity=[];
var cityCount=0;
var chooseCity = " ";
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

document.getElementById("humidOne").innerHTML = "humid";
document.getElementById("humidTwo").innerHTML = "humid";
document.getElementById("humidTre").innerHTML = "humid";
document.getElementById("humidFor").innerHTML = "humid";
document.getElementById("humidFiv").innerHTML = "humid";
console.log(timeNow);
}
dateCalc();
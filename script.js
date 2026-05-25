const colorMap = {

black:"#000000",
brown:"#8B4513",
red:"#ff0000",
orange:"#ff8c00",
yellow:"#ffff00",
green:"#00aa00",
blue:"#0000ff",
violet:"#8a2be2",
grey:"#808080",
white:"#ffffff",
gold:"#FFD700",
silver:"#C0C0C0"

};

function updateBands(){

const colors = [
"black",
"brown",
"red",
"orange",
"yellow",
"green",
"blue",
"violet",
"grey",
"white"
];

let band1 =
colors[
document.getElementById("band1").value
];

let band2 =
colors[
document.getElementById("band2").value
];

let multiplier =
document.getElementById("multiplier").value;

let tolerance =
document.getElementById("tolerance").value;

document.getElementById("band1Color")
.style.background =
colorMap[band1];

document.getElementById("band2Color")
.style.background =
colorMap[band2];

if(multiplier == 1)
document.getElementById("multiplierColor").style.background=colorMap.black;

else if(multiplier == 10)
document.getElementById("multiplierColor").style.background=colorMap.brown;

else if(multiplier == 100)
document.getElementById("multiplierColor").style.background=colorMap.red;

else if(multiplier == 1000)
document.getElementById("multiplierColor").style.background=colorMap.orange;

else if(multiplier == 10000)
document.getElementById("multiplierColor").style.background=colorMap.yellow;

else if(multiplier == 100000)
document.getElementById("multiplierColor").style.background=colorMap.green;

else
document.getElementById("multiplierColor").style.background=colorMap.blue;

document.getElementById("toleranceColor")
.style.background =
colorMap[tolerance];

}

function calculateResistor(){

let firstDigit =
document.getElementById("band1").value;

let secondDigit =
document.getElementById("band2").value;

let multiplier =
parseInt(
document.getElementById("multiplier").value
);

let value =
parseInt(firstDigit + secondDigit)
* multiplier;

let toleranceValue = 5;

if(
document.getElementById("tolerance").value
=="silver"
)
toleranceValue=10;

if(
document.getElementById("tolerance").value
=="brown"
)
toleranceValue=1;

if(
document.getElementById("tolerance").value
=="red"
)
toleranceValue=2;

let minimum =
value*(1-toleranceValue/100);

let maximum =
value*(1+toleranceValue/100);

document.getElementById("result")
.innerHTML=
"Resistance: "
+ value.toLocaleString()
+ " Ω";

document.getElementById("range")
.innerHTML=
"Tolerance Range: "
+ minimum.toFixed(0)
+ " Ω to "
+ maximum.toFixed(0)
+ " Ω";

}

document
.getElementById("band1")
.addEventListener("change",updateBands);

document
.getElementById("band2")
.addEventListener("change",updateBands);

document
.getElementById("multiplier")
.addEventListener("change",updateBands);

document
.getElementById("tolerance")
.addEventListener("change",updateBands);

updateBands();

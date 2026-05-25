function calculateResistor(){

let firstDigit =
document.getElementById("band1").value;

let secondDigit =
document.getElementById("band2").value;

let multiplier =
document.getElementById("multiplier").value;

let value =
parseInt(firstDigit + secondDigit) *
parseInt(multiplier);

document.getElementById("result")
.innerHTML =
"Resistance: " +
value.toLocaleString() +
" Ω";

}

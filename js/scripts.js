var gallons;

function galToLiters() {
  gallons = parseInt(prompt("How many gallons?"));
  alert(gallons + " converts to " + (gallons * 3.78541) + " liters");
}

galToLiters();

var upgrade1 = 0;
var upgrade2 = 0;
var upgrade3 = 0;
var upgrade4 = 0;
var upgrade5 = 0;
var upgrade6 = 0;
var upgrade7 = 0;
var upgrade1Price = 15;
var upgrade2Price = 100;
var upgrade3Price = 500;
var upgrade4Price = 3000;
var upgrade5Price = 25000;
var upgrade6Price = 100000;
var upgrade7Price = 1000000;
var linesOfCode = 0;
var CPS = 0;
var CPC = 1;

// you have to make your own sleep function
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


function buyUpgrade1() {
	linesOfCode -= 15
	CPC += 1
	upgrade1 += 1
	document.getElementById("upgrade1").innerHTML = upgrade1;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade2() {
	linesOfCode -= 100
	CPS += 1
	upgrade2 += 1
	document.getElementById("upgrade2").innerHTML = upgrade2;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade3() {
	linesOfCode -= 500
	CPS += 3
	upgrade3 += 1
	document.getElementById("upgrade3").innerHTML = upgrade3;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade4() {
	linesOfCode -= 3000
	CPS += 5
	upgrade4 +=1
	document.getElementById("upgrade4").innerHTML = upgrade4;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade5() {
	linesOfCode -= 25000
	CPS += 20
	upgrade5 +=1
	document.getElementById("upgrade5").innerHTML = upgrade5;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade6() {
	linesOfCode -= 100000
	CPS += 50
	upgrade6 +=1
	document.getElementById("upgrade6").innerHTML = upgrade6;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade7() {
	linesOfCode -= 1000000
	CPS += 100
	upgrade7 +=1
	document.getElementById("upgrade7").innerHTML = upgrade7;
	document.getElementById("count").innerHTML = linesOfCode;
}

function click() {
	linesOfCode += CPC
	document.getElementById("count").innerHTML = linesOfCode;
}

function clicksPerSecond() {
	linesOfCode += CPS
	document.getElementById("count").innerHTML = linesOfCode;
}

setInterval(function() {
    		clicksPerSecond()
		}, 1000); 

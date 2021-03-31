var upgrade1 = 0;
var upgrade2 = 0;
var upgrade3 = 0;
var upgrade4 = 0;
var upgrade5 = 0;
var upgrade6 = 0;
var upgrade7 = 0;
var upgrade8 = 0;
var upgrade9 = 0;
var upgrade1Price = 0;
var upgrade2Price = 100;
var upgrade3Price = 500;
var upgrade4Price = 3000;
var upgrade5Price = 25000;
var upgrade6Price = 100000;
var upgrade7Price = 1000000;
var upgrade8Price = 5000000;
var upgrade9Price = 5000000;
var site1Price = upgrade1Price + " Lines of Code"
var site2Price = upgrade2Price + " Lines of Code"
var site3Price = upgrade3Price + " Lines of Code"
var site4Price = upgrade4Price + " Lines of Code"
var site5Price = upgrade5Price + " Lines of Code"
var site6Price = upgrade6Price + " Lines of Code"
var site7Price = upgrade7Price + " Lines of Code"
var site8Price = upgrade8Price + " Lines of Code"
var site9Price = upgrade9Price + " Lines of Code"
var haveUpgrade8 = false
var linesOfCode = 0;
var CPS = 0;
var CPC = 0;

// you have to make your own sleep function
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// upgrades
function buyUpgrade1() {
	if (linesOfCode < upgrade1Price) {
		alert("You do not have enough lines of code!")
		return;
	}

	linesOfCode -= upgrade1Price
	CPC += 1
	upgrade1 += 1
	upgrade1Price += 5
	site1Price = upgrade1Price + " Lines of Code"
	document.getElementById("upgrade1").innerHTML = upgrade1;
	document.getElementById("upgrade1Price").innerHTML = site1Price;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade2() {
	if (linesOfCode < upgrade2Price) {
		alert("You do not have enough lines of code!")
		return;
	}

	linesOfCode -= upgrade2Price
	CPS += 1
	upgrade2 += 1
	upgrade2Price += 20
	site2Price = upgrade2Price + " Lines of Code"
	document.getElementById("upgrade2").innerHTML = upgrade2;
	document.getElementById("upgrade2Price").innerHTML = site2Price;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade3() {
	if (linesOfCode < upgrade3Price) {
		alert("You do not have enough lines of code!")
		return;
	}

	linesOfCode -= upgrade3Price
	CPS += 3
	upgrade3 += 1
	upgrade3Price += 100
	site3Price = upgrade3Price + " Lines of Code"
	document.getElementById("upgrade3").innerHTML = upgrade3;
	document.getElementById("upgrade3Price").innerHTML = site3Price;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade4() {
	if (linesOfCode < upgrade4Price) {
		alert("You do not have enough lines of code!")
		return;
	}

	linesOfCode -= upgrade4Price
	CPS += 5
	upgrade4 +=1
	upgrade4Price += 500
	site4Price = upgrade4Price + " Lines of Code"
	document.getElementById("upgrade4").innerHTML = upgrade4;
	document.getElementById("upgrade4Price").innerHTML = site4Price;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade5() {
	if (linesOfCode < upgrade5Price) {
		alert("You do not have enough lines of code!")
		return;
	}

	linesOfCode -= upgrade5Price
	CPS += 20
	upgrade5 +=1
	upgrade5Price += 2500
	site5Price = upgrade5Price + " Lines of Code"
	document.getElementById("upgrade5").innerHTML = upgrade5;
	document.getElementById("upgrade5Price").innerHTML = site5Price;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade6() {
	if (linesOfCode < upgrade6Price) {
		alert("You do not have enough lines of code!")
		return;
	}

	linesOfCode -= upgrade6Price
	CPS += 50
	upgrade6 +=1
	upgrade6Price += 10000
	site6Price = upgrade6Price + " Lines of Code"
	document.getElementById("upgrade6").innerHTML = upgrade6;
	document.getElementById("upgrade6Price").innerHTML = site6Price;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade7() {
	if (linesOfCode < upgrade7Price) {
		alert("You do not have enough lines of code!")
		return;
	}

	linesOfCode -= upgrade7Price
	CPS += 100
	upgrade7 +=1
	upgrade7Price += 500
	site7Price = upgrade7Price + " Lines of Code"
	document.getElementById("upgrade7").innerHTML = upgrade7;
	document.getElementById("upgrade7Price").innerHTML = site7Price;
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade8() {
	if (linesOfCode < upgrade8Price) {
		alert("You do not have enough lines of code!")
		return;
	}

	if (haveUpgrade8 == true) {
		alert("You cannot buy another one!")
		return;
	}

	linesOfCode -= upgrade8Price
	CPC += 1000
	upgrade8 +=1
	haveUpgrade8 = true
	document.getElementById("upgrade8").innerHTML = upgrade8;
	document.getElementById("upgrade8Price").innerHTML = "You cannot buy another one.";
	document.getElementById("count").innerHTML = linesOfCode;
}

function buyUpgrade9() {
	if (linesOfCode < upgrade9Price) {
		alert("You do not have enough lines of code!")
		return;
	}

	linesOfCode -= upgrade9Price
	CPS += 1000
	upgrade9 +=1
	upgrade9Price += 1000000
	site9Price = upgrade9Price + " Lines of Code"
	document.getElementById("upgrade9").innerHTML = upgrade7;
	document.getElementById("upgrade9Price").innerHTML = site9Price;
	document.getElementById("count").innerHTML = linesOfCode;
}

// clicks per click
function clickThatKeyboard() {
	linesOfCode += CPC
	document.getElementById("count").innerHTML = linesOfCode;
}

// clicks per second
function clicksPerSecond() {
	linesOfCode += CPS
	document.getElementById("count").innerHTML = linesOfCode;
}

linesOfCode = document.cookie;

// cps
setInterval(function() {
    		clicksPerSecond()
			document.cookie = linesOfCode;
		}, 1000); 


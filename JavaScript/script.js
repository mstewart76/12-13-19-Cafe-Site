$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 10000);

$(function(){
    var SetCarouselHeight = function() {
        $("#myCarousel .item > img").height(function(){
            return $("#myCarousel").width() * 0.5;
        });
    }

    SetCarouselHeight();
    $(window).resize(function(){
        SetCarouselHeight();
    }); 
});


//lunch menu

function displayEntres() {
  var x = document.getElementById("entres");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function loadentreXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunctionEntres(this);
    }
  };
  xmlhttp.open("GET", "../lunch.xml", true);
  xmlhttp.send();
}
function myFunctionEntres(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Food</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("entres");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("entres").innerHTML = table;
}


function displaySalads() {
  var x = document.getElementById("salads");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function loadsaladXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunctionSalads(this);
    }
  };
  xmlhttp.open("GET", "../lunch.xml", true);
  xmlhttp.send();
}
function myFunctionSalads(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Food</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("salads");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("salads").innerHTML = table;
}




function displaySides() {
  var x = document.getElementById("sides");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function loadsideXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunctionSides(this);
    }
  };
  xmlhttp.open("GET", "../lunch.xml", true);
  xmlhttp.send();
}
function myFunctionSides(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Food</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("sides");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("sides").innerHTML = table;
}



function displaySandwiches() {
  var x = document.getElementById("sandwiches");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function loadsandwichXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunctionSandwiches(this);
    }
  };
  xmlhttp.open("GET", "../lunch.xml", true);
  xmlhttp.send();
}
function myFunctionSandwiches(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Food</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("sandwiches");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("sandwiches").innerHTML = table;
}

function displayWraps() {
  var x = document.getElementById("wraps");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function loadwrapXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunctionWraps(this);
    }
  };
  xmlhttp.open("GET", "../lunch.xml", true);
  xmlhttp.send();
}
function myFunctionWraps(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Flavor</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("wraps");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("flavor")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("wraps").innerHTML = table;
}

function displayCheese() {
  var x = document.getElementById("cheese");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function loadcheeseXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunctionCheese(this);
    }
  };
  xmlhttp.open("GET", "../lunch.xml", true);
  xmlhttp.send();
}
function myFunctionCheese(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Food</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("cheese");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("cheese").innerHTML = table;
}

//breakfast menu 

function displayPlatters() {
  var x = document.getElementById("platters");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function loadplatterXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunctionPlatters(this);
    }
  };
  xmlhttp.open("GET", "../breakfast.xml", true);
  xmlhttp.send();
}
function myFunctionPlatters(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Food</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("platters");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("platters").innerHTML = table;
}


function displayToasts() {
  var x = document.getElementById("toast");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function loadtoastXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunctionToasts(this);
    }
  };
  xmlhttp.open("GET", "../breakfast.xml", true);
  xmlhttp.send();
}
function myFunctionToasts(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Food</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("toast");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("toast").innerHTML = table;
}


function displayBsides() {
  var x = document.getElementById("bsides");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function loadbsidesXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunctionBsides(this);
    }
  };
  xmlhttp.open("GET", "../breakfast.xml", true);
  xmlhttp.send();
}
function myFunctionBsides(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Food</th><th>Price</th></tr>";
  var x = xmlDoc.getElementsByTagName("sides");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("bsides").innerHTML = table;
}
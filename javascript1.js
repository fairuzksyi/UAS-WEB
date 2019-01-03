

function myFunction() {
  var x = document.getElementById("mySelect").options.namedItem("orange").text;
  document.getElementById("demo").innerHTML = x;
}

function myFunction() {
  var x = document.getElementById("mySelect");
  var i = x.selectedIndex;
  document.getElementById("demo").innerHTML = x.options[i].text;
}
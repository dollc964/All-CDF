console.log( document.getElementById("field01").value );
document.getElementById("myButton").onclick = function() {
  document.getElementById("word01").innerHTML = document.getElementById("field01").value;
  document.getElementById("word02").innerHTML = document.getElementById("field02").value;
  document.getElementById("word03").innerHTML = document.getElementById("field03").value;
  document.getElementById("word04").innerHTML = document.getElementById("field04").value;
  document.getElementById("word05").innerHTML = document.getElementById("field05").value;
  document.getElementById("word06").innerHTML = document.getElementById("field06").value;
  document.getElementById("word07").innerHTML = document.getElementById("field07").value;
  document.getElementById("word08").innerHTML = document.getElementById("field08").value;
  document.getElementById('myButton').style.color = "#00ff00";
  document.getElementById("story").style.display = "block";
}

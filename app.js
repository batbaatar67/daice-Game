// 
var activePlayer=1;

//

var scores=[0,0];

//
var roundScore=0;

var dice=Math.floor(  Math.random()*6) +1;



//window.document.querySelector("#score-0").textContent=dice;
//document.querySelector("#score-1").innerHTML="<em>Yes!</em>";

//ehlehed beldex
document.querySelector(".dice").style.display="none";

document.querySelector("#score-0").textContent=0;
document.querySelector("#score-1").textContent=0;
document.querySelector("#current-0").textContent=0;
document.querySelector("#current-1").textContent=0;

console.log('woo:'+dice);
// 
var activePlayer=0;

//

var scores=[0,0];

//
var roundScore=0;





//window.document.querySelector("#score-0").textContent=dice;
//document.querySelector("#score-1").innerHTML="<em>Yes!</em>";

//ehlehed beldex

var  diceDom=document.querySelector(".dice");

diceDom.style.display="none";
document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent='0';
document.getElementById("current-0").textContent='0';
document.getElementById("current-1").textContent='0';


//btn-hold
document.querySelector(".btn-hold").addEventListener("click",holdClick);

function holdClick(){
scores[activePlayer]=scores[activePlayer]+roundScore;
document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];
  

roundScore=0;
diceDom.style.display="none";
document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
document.getElementById("current-"+activePlayer).textContent='0';

     activePlayer===1?(activePlayer=0):(activePlayer=1);
     document.querySelector(".player-"+activePlayer+"-panel").classList.add("active");

}

document.querySelector(".btn-roll").addEventListener("click",function (){

    var diceNumber=Math.floor(  Math.random()*6) +1;
    diceDom.src ="dice-"+diceNumber+".png";
    diceDom.style.display="block";
 if(diceNumber!==1){
   
    roundScore=roundScore+ diceNumber;
   document.getElementById("current-"+activePlayer).textContent=roundScore;

 } else{
     //1 buulaa
     
          diceDom.src ="dice-"+diceNumber+".png";
        
          document.getElementById("current-"+activePlayer).textContent='0';

     activePlayer===1?(activePlayer=0):(activePlayer=1);

     roundScore=0;
     document.querySelector(".player-0-panel").classList.toggle("active");
     document.querySelector(".player-1-panel").classList.toggle("active");
     diceDom.style.display="none";

     
 }

});

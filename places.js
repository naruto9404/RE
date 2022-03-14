var random =Math.floor(Math.random()*6)+1;
var randomimages="dice"+random+".png";
var toshow="images/"+randomimages;
var total=document.querySelectorAll("img")[1];
total.setAttribute("src",toshow);


var random2=Math.floor(Math.random()*6)+1;
var image="dice"+random2+".png";
var sab="images/"+image;
var second=document.querySelectorAll("img")[2];
second.setAttribute("src",sab);

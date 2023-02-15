
// -------------------------for more option in navbar-------------------------

var MenuItem = document.getElementById("nav2ul");
          
MenuItem.style.display = "none";

function menutoggle() {
  if (MenuItem.style.display == "none")
   MenuItem.style.display = "block";
  else {
    MenuItem.style.display = "none";
  }
}
// -------------------------for more option in navbar-------------------------


// let the=document.querySelector("body");

function theme(){
  document.body.classList.toggle("dark-theme")   
}

// ---------------for opening loginpage in main page---------------



var switc = document.getElementById("switch");
          
switc.style.display = "none";

function switchopen() {
  if (switc.style.display == "none")
   switc.style.display = "block";
  else {
    switc.style.display = "none";
  }
}



// ---------------for opening loginpage in main page---------------




// ---------------for closeing loginpage in main page---------------



var switc = document.getElementById("switch");
          
switc.style.display = "none";

function switchremove() {
  if (switc.style.display == "none")
   switc.style.display = "block";
  else {
    switc.style.display = "none";
  }
}



// ---------------for closeing loginpage in main page---------------


var moreoption = document.getElementById("moreopt");
          
moreoption.style.display = "none"; 

function moreoptionincard(){
  if (moreoption.style.display == "none")
  moreoption.style.display = "block";
 else {
   moreoption.style.display = "none";
 }
}



// -----------------------like--------------------------

let count
if (localStorage.getItem("postlikes") == null) {
    count = 0;
}
else {
    count = localStorage.getItem("postlikes");
}
function likes() {
    let x = count++;
    localStorage.setItem("postlikes", count);
    document.querySelector("button").innerText = x
}
// -----------------------like--------------------------


// -----------------------moreopt--------------------------



var cancelopt = document.getElementById("moreopt");
          
cancelopt.style.display = "none"; 

function cancelmoreopt(){
  if (cancelopt.style.display == "none")
  cancelopt.style.display = "block";
 else {
   cancelopt.style.display = "none";
 }
}



// -----------------------moreopt--------------------------

let followbtnchange=document.getElementById("followbtnname");
let follow=0;
function followbtn(){
if(follow==0){
  follow=1;
  console.log(follow)
  followbtnchange.innerText="Following";
  followbtnchange.style.color="white";
}
else if(follow==1) {
  follow=0;
  followbtnchange.innerText="Follow";
}
}
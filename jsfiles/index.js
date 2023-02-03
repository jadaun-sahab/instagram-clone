
// -----------------------index page carousel--------------------------



let arr = ["image/img2.png", "image/img3.png", "image/img4.png"];

let i=0;

function slides2() {
document.getElementById("image").src = arr[i];

if (i < arr.length - 1)i++;
else i = 0;
}
setInterval(slides2, 1000);



// -----------------------index page carousel--------------------------



// ---------------------------------------------------------------------------



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


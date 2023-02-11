function theme(){
     document.body.classList.toggle("dark-theme")   
   }
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


var cancelopt = document.getElementById("moreopt");
          
cancelopt.style.display = "none"; 

function cancelmoreopt(){
  if (cancelopt.style.display == "none")
  cancelopt.style.display = "block";
 else {
   cancelopt.style.display = "none";
 }
}

var moreoption = document.getElementById("moreopt");
          
moreoption.style.display = "none"; 

function moreoptionincard(){
  if (moreoption.style.display == "none")
  moreoption.style.display = "block";
 else {
   moreoption.style.display = "none";
 }
}


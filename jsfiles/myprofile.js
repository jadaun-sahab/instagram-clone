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


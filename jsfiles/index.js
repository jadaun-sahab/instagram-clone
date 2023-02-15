
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



// --------------------------------login signup-------------------------------------------



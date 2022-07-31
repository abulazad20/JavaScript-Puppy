
		/*
      Assignment Holder - Assignment 7 - JavaScript Lab
      Part - 2 - JS
      Author:Abul Kalam Azad
      Student ID:300351811
              */

var topPosition = 0;
var leftPosition = screen.availWidth -600;


function runPuppy() {

    puppy.style.position = "relative";
    let id = null;
    const elempuppy = document.getElementById("puppy");   
    //let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {

        // to hold the puppy to visible screen height
      if (topPosition == 300) {
        clearInterval(id);
      } else 
      {
       
        leftPosition++; 
        topPosition++; 
       
        elempuppy.style.top = topPosition + "px"; 
        elempuppy.style.left = leftPosition + "px"; 

     }
    }

}


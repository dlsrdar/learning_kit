function p01Func() {
    document.getElementById("problem").innerHTML="<p>Basketball is a team sport in which two teams, most commonly of five players each,opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop </p>";
	document.getElementById("flowchart").src="basketball/Basketball_design.jpg";
    document.getElementById("js").src="basketball/basketball_js.jpg";
    document.getElementById("another").src="basketball/basketball_another.jpg";
  
 
 
 
  /* the following three lines gets the checkboxes, and unchecks them
  */
  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;

  /* in Ex3, update display of images */


}



function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
    document.getElementById("flowchart").style.display="inline";	  
  }
  else {
    document.getElementById("flowchart").style.display="none"	 
	  
	  
  }
}

function checkUncheck2(){
    if (document.getElementById("check2").checked==true) {
      document.getElementById("js").style.display="inline";	  
    }
    else {
      document.getElementById("js").style.display="none"	
    }
}
function checkUncheck3(){
    if (document.getElementById("check3").checked==true) {
      document.getElementById("another").style.display="inline";	  
    }
    else {
      document.getElementById("another").style.display="none"	
    }
}
function zoomIn(){
    document.getElementById("flowchart").style.width="200%"
}
function zoomOut(){

    document.getElementById("flowchart").style.width="100%"
}


/* remove this line
function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
     // add a getElementById here to get "js" img and 
     // set the display property of its style  
	 
	 
  }
  else {
     // add a getElementById here to get "js" img and 
     // set the display property of its style  
	  
	  
  }
}
remove this line */

/* in Ex2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/
function p02Func() {
    document.getElementById("problem").innerHTML="<p>Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.[1] It has been a part of the official program of the Summer Olympic Games since Tokyo 1964. </p>";
	document.getElementById("flowchart").src="volleyball/volleyball_design.jpg";
    document.getElementById("js").src="volleyball/volleyball_js.jpg";
    document.getElementById("another").src="volleyball/volleyball_another.jpg";

  
    document.getElementById("flowchart").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("another").style.display="none";
    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;

 


}

function p03Func() {
  document.getElementById("problem").innerHTML="<p> Perimeter of rectangle </p>";
document.getElementById("flowchart").src="images/image_01.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;




}


function p04Func() {
  document.getElementById("problem").innerHTML="<p> Volume of ellipse </p>";
document.getElementById("flowchart").src="images/image_02.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;




}




function p05Func() {
  document.getElementById("problem").innerHTML="<p> Largest number </p>";
document.getElementById("flowchart").src="images/image_03.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;




}



function p06Func() {
  document.getElementById("problem").innerHTML="<p> Quadratic Equation has 2 different roots or identical or no roots </p>";
document.getElementById("flowchart").src="images/image_04.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;




}
function p07Func() {
  document.getElementById("problem").innerHTML="<p> Divisible by 6 or not </p>";
document.getElementById("flowchart").src="images/image_05.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;




}



function p08Func() {
  document.getElementById("problem").innerHTML="<p> Grade calculator </p>";
document.getElementById("flowchart").src="images/image_06A.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;




}
function p09Func() {
  document.getElementById("problem").innerHTML="<p> Grade calculator Switch case </p>";
document.getElementById("flowchart").src="images/image_06B.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;




}

function p10Func() {
  document.getElementById("problem").innerHTML="<p> Input is positive or negative </p>";
document.getElementById("flowchart").src="images/image_7.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;




}
function p11Func() {
  document.getElementById("problem").innerHTML="<p> Seperating the numbers  </p>";
document.getElementById("flowchart").src="images/image_8.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;




}
function p12Func() {
  document.getElementById("problem").innerHTML="<p> Number of 3 and 7 in digit </p>";
document.getElementById("flowchart").src="images/image_9.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;




}
function p13Func() {
  document.getElementById("problem").innerHTML="<p> Reverse is same or not </p>";
document.getElementById("flowchart").src="images/image_10.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;




}
function p14Func() {
  document.getElementById("problem").innerHTML="<p> Factorial using for loop </p>";
document.getElementById("flowchart").src="images/image_11A.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;



}

function p15Func() {
  document.getElementById("problem").innerHTML="<p> Factorial using While loop </p>";
document.getElementById("flowchart").src="images/image_11B.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;



}

function p16Func() {
  document.getElementById("problem").innerHTML="<p> Fibonacci sequence </p>";
document.getElementById("flowchart").src="images/image_12.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;



}
function p17Func() {
  document.getElementById("problem").innerHTML="<p> Nested loop  </p>";
document.getElementById("flowchart").src="images/image_13.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;



}


function p18Func() {
  document.getElementById("problem").innerHTML="<p> Trace table for prime   </p>";
document.getElementById("flowchart").src="image/image_01.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;



}

function p19Func() {
  document.getElementById("problem").innerHTML="<p> Trace table for number of positive and negative number  </p>";
document.getElementById("flowchart").src="image/image_02.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;



}

function p20Func() {
  document.getElementById("problem").innerHTML="<p> Trace table for Binary representation   </p>";
document.getElementById("flowchart").src="image/image_03.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;



}

function p21Func() {
  document.getElementById("problem").innerHTML="<p> Trace table for first 4 negative an next 4 positive   </p>";
document.getElementById("flowchart").src="image/image_04.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;



}


function p22Func() {
  document.getElementById("problem").innerHTML="<p> Trace table for sum of array   </p>";
document.getElementById("flowchart").src="image/image_05.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;



}

function p23Func() {
  document.getElementById("problem").innerHTML="<p> Trace table for list of prime   </p>";
document.getElementById("flowchart").src="image/image_06.jpeg";
  document.getElementById("js").src="";
  document.getElementById("another").src="";


  document.getElementById("flowchart").style.display="none";
  document.getElementById("js").style.display="none";
  document.getElementById("another").style.display="none";
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;



}




function checkUncheck1(){
    if (document.getElementById("check1").checked==true) {
      document.getElementById("flowchart").style.display="inline";	  
    }
    else {
      document.getElementById("flowchart").style.display="none"	 
        
        
    }
  }
  
  function checkUncheck2(){
      if (document.getElementById("check2").checked==true) {
        document.getElementById("js").style.display="inline";	  
      }
      else {
        document.getElementById("js").style.display="none"	
      }
  }
  function checkUncheck3(){
      if (document.getElementById("check3").checked==true) {
        document.getElementById("another").style.display="inline";	  
      }
      else {
        document.getElementById("another").style.display="none"	
      }
  }

/* in Ex3, create function p02Func similar to p01Func */

/* in Ex4, create functions zoomIn() and zoomOut() */

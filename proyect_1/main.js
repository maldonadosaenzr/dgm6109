

document.getElementById("action").addEventListener("click", processForm);

let xInput, yInput, choice;

function processForm() {
    /* Get data from the form */
    xInput = Number(document.getElementById("xInput").value);
    yInput = Number(document.getElementById("yInput").value);
    /* STEP 9: CHECK SELECT MENU OPTION HERE USING VARIABLE CHOICE */
    drawing.selectAll('svg>*').remove(); // This line selects everything that has been drawn in the SVG and deletes it all
    drawImage();
}

/* set up the drawing canvas - Be sure not to copy this code from your draft project! */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/*
The function below is called when the user presses the "Draw!" button and is where you will put most of your drawing code. Please follow the instructions in the homework PDF for this step.
*/

function drawImage() {

   
   let foxX = 200;
let foxY = 200;
let headX= 200;
let headY= 200;

    // This is an example of extra (optional) variables to position a part of your drawing
    // Remove these comments and these example variables.
  
      let foxHeadLeft = drawing.append("polyline")
.attr("points", closedPolygon(headX+50, headY-80, 
                            headX-70,headY+10, 
                            headX-25,headY+50, 
                            headX+20,headY+50)) 
.attr("fill","orange");

    let foxHeadRight = drawing.append("polyline")
.attr("points", closedPolygon(headX+50, headY-80, 
                            headX+165,headY+10,  
                            headX+125,headY+50, 
                            headX+20,headY+50)) 
.attr("fill","orange");




    let foxBody = drawing.append("polyline")
.attr("points", closedPolygon(headX+50, headY-50, 
                            headX-40,headY+210,  
                            headX+50,headY+210, 
                            headX+150,headY+210))  
.attr("fill","orange");

   let foxWhiteDimond = drawing.append("polyline")
.attr("points", closedPolygon(headX+50, headY-80, 
                            headX+80,headY+50,  
                            headX+50,headY+195, 
                            headX+20,headY+50)) 
.attr("fill","white");



   
     let foxEarLeft = drawing.append("polyline")
.attr("points", closedPolygon(headX+50, headY-80, 
                            headX-70,headY+10,  
                            headX-25,headY-150, 
                            headX+50,headY-80)) 
.attr("fill","brown");

    let foxEarRight = drawing.append("polyline")
.attr("points", closedPolygon(headX+50, headY-80, 
                            headX+165,headY+10,  
                            headX+125,headY-150, 
                            headX+50,headY-80)) 
.attr("fill","brown");



let foxNose = drawing.append("circle")
.attr("cx", headX+50)
.attr("cy", foxY+40)
.attr("r", 15)
.attr("fill", "black");


let foxEyeLeft = drawing.append("circle")
.attr("cx", headX+10)
.attr("cy", foxY+4)
.attr("r", 8)
.attr("fill", "black");
let foxEyeRight = drawing.append("circle")
.attr("cx", headX+85)
.attr("cy", foxY+4)
.attr("r", 8)
.attr("fill", "black");


   let foxTail = drawing.append("polyline")
.attr("points", closedPolygon(headX-160, headY+10, 
                            headX-140,headY+150,  
                            headX-40,headY+210, 
                            headX-50,headY+100)) 
.attr("fill","brown");


let foxPawLeft = drawing.append("circle")
.attr("cx", headX+10)
.attr("cy", foxY+210)
.attr("r", 12)
.attr("fill", "black");
let foxPawRight = drawing.append("circle")
.attr("cx", headX+85)
.attr("cy", foxY+210)
.attr("r", 12)
.attr("fill", "black");



   

    // Step 10: Modify your drawing code to CONDITIONALLY draw part of your drawing based on
    // the choice the user made in your selection menu (stored in variable "choice" above)

    

    /***** DO NOT ADD OR EDIT ANYTHING BELOW THIS LINE ******/
}

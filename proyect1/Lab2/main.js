"use strict"

let foxX = 200;
let foxY = 200;
let headX= 200;
let headY= 200;

/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

/* Draw a border that matches the maximum drawing area for this assignment.
    Assign the border to a variable so that:
        (1) We know what the purpose of the shape is, and
        (2) We will have the ability to change it later (in a future assignment)
*/
let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/* Write your code for Project 1 beneath this comment */

let grid = drawing.append ("rect") // grid
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

    // Problem: grid not shown on screen (no idea how to fix)

    //fox head

    let foxHead = drawing.append ("rect")
    .attr("width", 100)
    .attr("height", 100)
    .attr("x",foxX)
    .attr("y",foxY)
    .attr("fill","orange");

    // body

      let foxBody = drawing.append ("rect")
    .attr("width", 80)
    .attr("height", 100)
    .attr("x",210)
    .attr("y",310)
    .attr("fill","orange");


    // triangles of ears, left

    let foxEarLeft = drawing.append("polyline")
.attr("points", closedPolygon(headX, headY-30, 
                            headX-1,headY-1,  
                            headX+1,headY+2, 
                            headX+45,headY+1))  
.attr("fill","orange");

// triangles of ears, right

    let foxEarRight = drawing.append("polyline")
.attr("points", closedPolygon(headX+100, headY-30, // Y -30
                            headX+100,headY+10,  // both - 1 
                            headX-1,headY-2, // X +1, Y+2
                            headX+55,headY-1))  // X+ 50, Y+1
.attr("fill","orange");



// NOTE: at some point i accidentaly presed comand + F on the last headY
//of foxEarRight;dont know what it does.


// eyes

let foxEyeLeft = drawing.append("circle")
.attr("cx", headX+22)
.attr("cy", foxY+50)
.attr("r", 15)
.attr("fill", "black");

let foxEyeRight = drawing.append("circle")
.attr("cx", headX+75)
.attr("cy", foxY+50)
.attr("r", 15)
.attr("fill", "black");
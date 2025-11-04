"use strict"

/* Configuration variables: drawing */
let svgWidth = 600;
let svgHeight = 400;
let margin = 25;

/* Resize  div to match width of visualization. */
let maxcoffees = 5
let maxsleep = 10

/* Create drawing canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw canvas border */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw margin border. */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);

let dataset = fillInData();

let xScale = d3.scaleLinear()
    .domain([0, maxcoffees])
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, maxsleep])
    .range([svgHeight - margin, margin]);

let circles = svg.selectAll("circle")
    .data(dataset)
    .join("circle");

circles.attr("r", 10)
    .attr("cx", function (value, index) {
        return xScale (value.coffees_Morning); 
    })
    .attr ("cy", function(value) {
        return yScale (value.qualitySleep);
    })
    .attr("opacity", .5)
    .attr("fill", function (value) {
        if (value. Number == 1)
            return "green"
        if (value. Number == 5)
            return "blue "

    

    

    for(let i =1 ; i <= 4; i++) {
        svg. append ("circle" )
        .attr("r", 10 )
        . attr ("cx", margin + 15)
        . attr ("cy",  margin +i * 20)
        . attr ("fill", Colors[i-1])

    }

/**** label the axes ****/
let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("coffee consumed");

let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", margin / 2)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("sleep quality")
    .attr("transform", "rotate(-90)");

/**** label key graph coordinates ****/
let originLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("0,0");

    let originLabel1 = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (50))
    .attr("text-anchor", "middle")
    .text("0,0");

   let originLabel2 = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (100))
    .attr("text-anchor", "middle")
    .text("0,0");

      let originLabel3 = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (150))
    .attr("text-anchor", "middle")
    .text("0,0");

      let originLabel4 = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (200))
    .attr("text-anchor", "middle")
    .text("0,0");

     let originLabel5 = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (250))
    .attr("text-anchor", "middle")
    .text("0,0");

    // coffee ratio

        let originLabel6 = svg.append("text")
    .attr("x", margin - (-50))
    .attr("y", svgHeight - (10))
    .attr("text-anchor", "middle")
    .text("0,0");

         let originLabel7 = svg.append("text")
    .attr("x", margin - (-100))
    .attr("y", svgHeight - (10))
    .attr("text-anchor", "middle")
    .text("0,0");

        let originLabel8 = svg.append("text")
    .attr("x", margin - (-150))
    .attr("y", svgHeight - (10))
    .attr("text-anchor", "middle")
    .text("0,0");
   

        let originLabel9 = svg.append("text")
    .attr("x", margin - (-200))
    .attr("y", svgHeight - (10))
    .attr("text-anchor", "middle")
    .text("0,0");
   
let colors= ["green","blue"]
function fillInData () {

return[

{coffees_Morning: 3,
    qualitySleep:3
},
{coffees_Morning: 1,
    qualitySleep:5
},

{coffees_Morning: 3,
    qualitySleep:5
},

{coffees_Morning: 2,
    qualitySleep:5
},

{coffees_Morning: 0,
    qualitySleep:9
},

{coffees_Morning: 0,
    qualitySleep:4
},

{coffees_Morning: 2,
    qualitySleep:8
},



]
};

// errors keep apearing. 

  
console.log("pasa")

  // Step 1: Set up dimensions and margins
        const margin = {top: 40, right: 80, bottom: 80, left: 100};
        const width = 800 - margin.left - margin.right;
        const height = 600 - margin.top - margin.bottom;
        
        // Step 2: Create SVG container
        const svg = d3.select("#chart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        
        // Step 3: Embedded data (converted from CSV to avoid CORS issues)
        const csvData = [
            {date: "20-Oct-2025", coffee_in_morning: "3", coffee_after_noon: "0", lights_off_hour_before_bed: "0", bedtime: "5", quality_of_sleep: "3"},
            {date: "21-Oct-2025", coffee_in_morning: "1", coffee_after_noon: "2", lights_off_hour_before_bed: "1", bedtime: "5", quality_of_sleep: "7"},
            {date: "22-Oct-2025", coffee_in_morning: "3", coffee_after_noon: "1", lights_off_hour_before_bed: "1", bedtime: "8", quality_of_sleep: "5"},
            {date: "23-Oct-2025", coffee_in_morning: "2", coffee_after_noon: "0", lights_off_hour_before_bed: "1", bedtime: "8", quality_of_sleep: "5"},
            {date: "24-Oct-2025", coffee_in_morning: "0", coffee_after_noon: "0", lights_off_hour_before_bed: "0", bedtime: "9", quality_of_sleep: "9"},
            {date: "25-Oct-2025", coffee_in_morning: "0", coffee_after_noon: "1", lights_off_hour_before_bed: "1", bedtime: "5", quality_of_sleep: "4"},
            {date: "26-Oct-2025", coffee_in_morning: "2", coffee_after_noon: "1", lights_off_hour_before_bed: "0", bedtime: "8", quality_of_sleep: "8"},
            {date: "27-Oct-2025", coffee_in_morning: "2", coffee_after_noon: "2", lights_off_hour_before_bed: "1", bedtime: "5", quality_of_sleep: "3"},
            {date: "28-Oct-2025", coffee_in_morning: "1", coffee_after_noon: "0", lights_off_hour_before_bed: "1", bedtime: "5", quality_of_sleep: "7"},
            {date: "29-Oct-2025", coffee_in_morning: "3", coffee_after_noon: "0", lights_off_hour_before_bed: "0", bedtime: "3", quality_of_sleep: "4"},
            {date: "30-Oct-2025", coffee_in_morning: "3", coffee_after_noon: "1", lights_off_hour_before_bed: "0", bedtime: "4", quality_of_sleep: "3"},
            {date: "1-Nov-2025", coffee_in_morning: "0", coffee_after_noon: "3", lights_off_hour_before_bed: "0", bedtime: "7", quality_of_sleep: "6"},
            {date: "2-Nov-2025", coffee_in_morning: "4", coffee_after_noon: "0", lights_off_hour_before_bed: "0", bedtime: "9", quality_of_sleep: "6"},
            {date: "3-Nov-2025", coffee_in_morning: "0", coffee_after_noon: "4", lights_off_hour_before_bed: "0", bedtime: "8", quality_of_sleep: "8"},
            {date: "4-Nov-2025", coffee_in_morning: "1", coffee_after_noon: "0", lights_off_hour_before_bed: "1", bedtime: "7", quality_of_sleep: "8"},
            {date: "5-Nov-2025", coffee_in_morning: "3", coffee_after_noon: "0", lights_off_hour_before_bed: "0", bedtime: "8", quality_of_sleep: "9"},
            {date: "6-Nov-2025", coffee_in_morning: "3", coffee_after_noon: "1", lights_off_hour_before_bed: "1", bedtime: "8", quality_of_sleep: "6"},
            {date: "7-Nov-2025", coffee_in_morning: "2", coffee_after_noon: "2", lights_off_hour_before_bed: "0", bedtime: "8", quality_of_sleep: "8"},
            {date: "8-Nov-2025", coffee_in_morning: "0", coffee_after_noon: "1", lights_off_hour_before_bed: "1", bedtime: "9", quality_of_sleep: "8"},
            {date: "9-Nov-2025", coffee_in_morning: "2", coffee_after_noon: "2", lights_off_hour_before_bed: "0", bedtime: "6", quality_of_sleep: "6"},
            {date: "11-Nov-2025", coffee_in_morning: "3", coffee_after_noon: "0", lights_off_hour_before_bed: "0", bedtime: "3", quality_of_sleep: "3"},
            {date: "12-Nov-2025", coffee_in_morning: "3", coffee_after_noon: "1", lights_off_hour_before_bed: "1", bedtime: "4", quality_of_sleep: "4"},
            {date: "13-Dec-2025", coffee_in_morning: "1", coffee_after_noon: "2", lights_off_hour_before_bed: "1", bedtime: "8", quality_of_sleep: "8"},
            {date: "14-Nov-2025", coffee_in_morning: "1", coffee_after_noon: "3", lights_off_hour_before_bed: "0", bedtime: "6", quality_of_sleep: "3"},
            {date: "15-Nov-2025", coffee_in_morning: "2", coffee_after_noon: "2", lights_off_hour_before_bed: "0", bedtime: "7", quality_of_sleep: "6"},
            {date: "16-Nov-2025", coffee_in_morning: "1", coffee_after_noon: "0", lights_off_hour_before_bed: "1", bedtime: "7", quality_of_sleep: "8"},
            {date: "17-Nov-2025", coffee_in_morning: "3", coffee_after_noon: "0", lights_off_hour_before_bed: "0", bedtime: "7", quality_of_sleep: "8"},
            {date: "18-Nov-2025", coffee_in_morning: "3", coffee_after_noon: "1", lights_off_hour_before_bed: "1", bedtime: "8", quality_of_sleep: "8"},
            {date: "19-Dec-2025", coffee_in_morning: "1", coffee_after_noon: "3", lights_off_hour_before_bed: "0", bedtime: "5", quality_of_sleep: "5"},
            {date: "20-Nov-2025", coffee_in_morning: "0", coffee_after_noon: "1", lights_off_hour_before_bed: "0", bedtime: "9", quality_of_sleep: "9"},
            {date: "21-Nov-2025", coffee_in_morning: "2", coffee_after_noon: "2", lights_off_hour_before_bed: "0", bedtime: "2", quality_of_sleep: "1"},
            {date: "22-Nov-2025", coffee_in_morning: "2", coffee_after_noon: "0", lights_off_hour_before_bed: "1", bedtime: "9", quality_of_sleep: "7"},
            {date: "23-Nov-2025", coffee_in_morning: "3", coffee_after_noon: "0", lights_off_hour_before_bed: "1", bedtime: "8", quality_of_sleep: "6"},
            {date: "24-Nov-2025", coffee_in_morning: "3", coffee_after_noon: "1", lights_off_hour_before_bed: "1", bedtime: "8", quality_of_sleep: "8"},
            {date: "25-Nov-2025", coffee_in_morning: "4", coffee_after_noon: "0", lights_off_hour_before_bed: "1", bedtime: "8", quality_of_sleep: "9"}
        ];
        
        // Process the embedded data
        const data = csvData.filter(d => d.quality_of_sleep && d.quality_of_sleep.trim() !== '').map(d => {
                // Parse date from DD-MMM-YYYY format
                const dateParts = d.date.split('-');
                const day = dateParts[0].padStart(2, '0');
                const month = dateParts[1];
                const year = dateParts[2];
                
                // Convert month abbreviation to number
                const monthMap = {
                    'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
                    'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
                    'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
                };
                
                const formattedDate = `${year}-${monthMap[month]}-${day}`;
                
                // Calculate total coffee consumption for categorization
                const totalCoffee = (+d.coffee_in_morning || 0) + (+d.coffee_after_noon || 0);
                let coffeeCategory;
                if (totalCoffee === 0) coffeeCategory = "No Coffee";
                else if (totalCoffee <= 2) coffeeCategory = "Light Coffee";
                else coffeeCategory = "Heavy Coffee";
                
                return {
                    date: formattedDate,
                    value: +d.quality_of_sleep,
                    category: coffeeCategory,
                    totalCoffee: totalCoffee,
                    bedtime: +d.bedtime,
                    lightsOff: +d.lights_off_hour_before_bed
                };
            });
            
            // Sort by date
            data.sort((a, b) => new Date(a.date) - new Date(b.date));
            
            // Call the chart creation function with processed data
            createChart(data);
        
        // Step 4: Chart creation function
        function createChart(data) {
        
            // Parse dates and set up scales
            const parseDate = d3.timeParse("%Y-%m-%d");
            data.forEach(d => {
                d.date = parseDate(d.date);
            });
            
            // Create scales (swapped for horizontal layout)
            const xScale = d3.scaleLinear()
                .domain([0, 10]) // Sleep quality is rated 1-10
                .range([0, width]);
                
            const yScale = d3.scaleBand()
                .domain(data.map(d => d.date))
                .range([0, height])
                .padding(0.1);
                
            // Color scale for coffee categories
            const colorScale = d3.scaleOrdinal()
                .domain(["No Coffee", "Light Coffee", "Heavy Coffee"])
                .range(["#a6d82c", "#e0b726", "#c7781dff"]); // Green, Orange, Red
        
            // Step 5: Create axes
            const xAxis = d3.axisBottom(xScale);
                
            const yAxis = d3.axisLeft(yScale)
                .tickFormat(d3.timeFormat("%m/%d"));
            
            // Add X axis
            svg.append("g")
                .attr("class", "axis")
                .attr("transform", `translate(0,${height})`)
                .call(xAxis);
                
            // Add Y axis
            svg.append("g")
                .attr("class", "axis")
                .call(yAxis);
        
            // Step 6: Add axis labels
            svg.append("text")
                .attr("class", "axis-label")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x", 0 - (height / 2))
                .attr("dy", "1em")
                .text("Date");
                
            svg.append("text")
                .attr("class", "axis-label")
                .attr("transform", `translate(${width / 2}, ${height + margin.bottom - 40})`)
                .text("Sleep Quality (1-10 Scale)");
            
            // Step 7: Add chart title
            svg.append("text")
                .attr("class", "chart-title")
                .attr("x", width / 2)
                .attr("y", 0 - (margin.top / 2))
                .text("Sleep Quality by Coffee Consumption,");

                svg.append("text")
                .attr("class", "chart-title")
                .attr("x", width / 2)
                .attr("y", 0 - (margin.top / 7))
                .text("if coffee consumption increases; sleep quality decreases.");
                
        
            // Step 8: Create horizontal bars
            svg.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", 0)
                .attr("width", d => xScale(d.value))
                .attr("y", d => yScale(d.date))
                .attr("height", yScale.bandwidth())
                .style("fill", d => colorScale(d.category))
                .style("stroke", "#333")
                .style("stroke-width", "1px");
            
            
            
            // Step 10: Add tooltips
            svg.selectAll(".bar")
                .append("title")
                .text(d => `Date: ${d3.timeFormat("%Y-%m-%d")(d.date)}\nSleep Quality: ${d.value}/10\nCoffee Level: ${d.category}\nTotal Coffee: ${d.totalCoffee} cups\nBedtime Hour: ${d.bedtime}`);
        }

        //resourses
        //https://www.w3schools.com/
        //https://d3js.org/api
        //https://tailwindcss.com/docs/grid-column
        //https://getbootstrap.com/docs/5.3/utilities/link/#link-opacity
        //https://www.youtube.com/watch?v=QoC4RxNIs5M&t=6983s

        //Eduard k. tutor of Wizant
        //jose patricio villareal
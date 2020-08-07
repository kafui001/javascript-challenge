// from data.js
var tableData = data;

// YOUR CODE HERE!


// Select the button
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");



// Complete the event handler function for the form

function buildTable(data) {
tbody.html("");
data.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

};



function filterData(){

    const date = d3.select("#datetime").property("value");
    let filteredData = tableData; 
    if (date) {
        filteredData = filteredData.filter(row => row.datetime == date);
    }

    buildTable(filteredData);

};

// Create event handlers 
button.on("click", filterData);
buildTable(tableData);
//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#patient-form-input");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(people);

//   var filteredData = people.filter(person => person.bloodType === inputValue);

//   console.log(filteredData);

//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var mean = math.mean(ages);
//   var median = math.median(ages);
//   var mode = math.mode(ages);
//   var variance = math.var(ages);
//   var standardDeviation = math.std(ages);

//   // Then, select the unordered list element by class name
//   var list = d3.select(".summary");

//   // remove any children from the list to
//   list.html("");

//   // append stats to the list
//   list.append("li").text(`Mean: ${mean}`);
//   list.append("li").text(`Median: ${median}`);
//   list.append("li").text(`Mode: ${mode}`);
//   list.append("li").text(`Variance: ${variance}`);
//   list.append("li").text(`Standard Deviation: ${standardDeviation}`);


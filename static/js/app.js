// from data.js
var tableData = data;
//console.log(tableData);
// YOUR CODE HERE!
var tableData = data;
var tbody = d3.select('tbody');


// YOUR CODE HERE!
tableData.forEach((ufodata) => {
   var row = tbody.append("tr");
   Object.entries(ufodata).forEach(([key, value]) => {
       var cell = row.append("td");
       cell.text(value);
   });
});

var submit = d3.select("#filter-btn");
// var inputs = document.getElementsByClassName('form-control');
// console.log(inputs);
 submit.on("click", function() {
   tbody.html(" ");
   
   
   d3.event.preventDefault();
   var dateValue = d3.select("#datetime").property("value");
   console.log(dateValue);
   var cityValue = d3.select("#city").property("value");
   console.log(cityValue);
   var stateValue = d3.select("#state").property("value");
   console.log(stateValue);
   var countryValue = d3.select("#country").property("value");
   console.log(countryValue);
   var shapeValue = d3.select("#shape").property("value");
   console.log(shapeValue);
   
  var filteredData = tableData.filter(ufo => ufo.datetime === dateValue || ufo.city === cityValue || ufo.state === stateValue||
       ufo.country === countryValue||ufo.shape === shapeValue);
   console.log(filteredData)
   
    
    filteredData.forEach(ufosighting => {
      var row = tbody.append('tr');
      Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
        });
    }); 

 }); 

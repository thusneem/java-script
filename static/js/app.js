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
submit.on("click", function() {
tbody.html(" ");
d3.event.preventDefault();
   var filter = {};
   filter.datetime = d3.select("#datetime").property("value");
   //console.log(dateValue);
   filter.city= d3.select("#city").property("value");
   //console.log(cityValue);
   filter.state = d3.select("#state").property("value");
   //console.log(stateValue);
   filter.country = d3.select("#country").property("value");
   //console.log(countryValue);
   filter.shape = d3.select("#shape").property("value");
   //console.log(shapeValue);

   console.log(filter);   
   
     /**
 * Filters an array of objects with multiple criteria.
 *
 * @param  {Array}  array: the array to filter
 * @param  {Object} filters: an object with the filter criteria as the property names
 * @return {Array}
 */
    const multiFilter = (arr, filters) => {
        const filterKeys = Object.keys(filters);
        return arr.filter(eachObj => {
        return filterKeys.every(eachKey => {
            if (!filters[eachKey].length) {
            return true; // passing an empty filter means that filter is ignored.
            }
            return filters[eachKey].includes(eachObj[eachKey]);
        });
        });
    };
  var filtered = multiFilter(tableData,filter);
  console.log(filtered)
   
   
    
    filtered.forEach(ufosighting => {
      var row = tbody.append('tr');
      Object.entries(ufosighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
        });
    }); 

 }); 

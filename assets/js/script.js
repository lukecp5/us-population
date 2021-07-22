fetch(
  "https://api.worldbank.org/v2/countries/USA/indicators/SP.POP.TOTL?per_page=5000&format=json"
)
  .then(function (response) {
    var jsonRes = response.json();
    console.log(jsonRes);
    return jsonRes;
  })
  .then(function (popHistory) {
    var years = popHistory[1];
    years.reverse();
    var listEl = $("#popList");
    for (i in years) {
      var year = years[i].date;
      var population = years[i].value;
      var newYear = $("<li>").addClass("list-group-item list-group-item-action flex-column align-items-start active border border-dark ");
      var innerDiv = $("<div>").addClass("d-flex w-75 justify-content-around m-auto");
      var yearEl = $("<h1>").addClass("lead ").text(year);
      var popEl = $("<h1>").addClass("lead").text(population);
      $(innerDiv).append(yearEl);
      $(innerDiv).append(popEl);
      $(newYear).append(innerDiv);
      $(listEl).append(newYear);
      
      console.log("Year: " + year + "   " + "Population: " + population);
    }
    console.log(years[1].country.value);
    console.log(years);
  })
  //   .then(function (data) {
  //     for (emoji in data) {
  //       console.log();
  //     }
  //   })
  .catch(function (err) {
    console.log("Something went wrong!", err);
  });

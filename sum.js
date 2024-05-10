var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);

//4.Print the total population of the country using reduce method

var totalPopulation = res.reduce(
    (accumulator, country) => accumulator + country.population,
    0
  );
  console.log("Total population of countries:", totalPopulation);


//5.Print the country that uses US dollar as currency

var currency = res.filter((element) => {
    for (let key in element.currencies) {
      if (element.currencies[key].code=== "USD") {
        return element;
      }
    }
  });
  console.log(currency);
}
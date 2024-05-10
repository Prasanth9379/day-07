var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);

     //1.Get all the countries from the Asia continent/region using the Filter function

     const asiaCountries = res.filter((country) => country.region === "Asia");
    console.log("Countries in Asia:", asiaCountries);

//2.Get all the countries with the population of less than 2 lakhs using filter method

const crowd = res.filter(
  (country) => country.population < 200000
);
console.log(
  "Countries with population less than 2 lakhs:",
  crowd
);


//3.print the following detail name,capital,flag using forEach method
      res.forEach((country) => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital[0]);
    console.log("Flag:", country.flags.png);
 });

}
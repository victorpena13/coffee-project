'use strict'


var coffeeList = [
    {name: 'Light City', roast: 'Light'},
    {name: 'Half City', roast: 'Light'},
    {name: 'Cinnamon', roast: 'Light'},
    {name: 'City', roast: 'Medium'},
    {name: 'American', roast: 'Medium'},
    {name: 'Breakfast', roast: 'Medium'},
    {name: 'High', roast: 'Dark',},
    {name: 'Continental', roast: 'Dark'},
    {name: 'New Orleans', roast: 'Dark'},
    {name: 'European', roast: 'Dark'},
    {name: 'Espresso', roast: 'Dark'},
    {name: 'Viennese', roast: 'Dark'},
    {name: 'Italian', roast: 'Dark'},
    {name: 'French', roast: 'Dark'}
]


function displayCoffee() {
    var html = '';
    coffeeList.forEach(function(coffee){
        html += coffee.name + "\n" + coffee.roast +"\n";
    });
    return html;
}

//the following code allows the user to search for specific coffee:
var searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', function (e) {
    console.log(e.target.value);
});


var htmlList = document.getElementById('coffees-object');
htmlList.innerText = displayCoffee();

htmlList.style.color = '#0000ff';






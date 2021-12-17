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

function addCoffee(name, roast) {
    var coffee = [
        {
            name: name,
            roast: roast

        }
    ]
    coffeeList.push(coffee);
}
function displayCoffee() {
    var html = '';
    coffeeList.forEach(function(coffee){
        html += coffee.name + "\n";
    });
    return html;
}


document.getElementById('coffees-object').innerText = displayCoffee();


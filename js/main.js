var coffeeList = [
    {name: 'Light City', roast: 'Light'},
    {name: 'Half City', roast: 'Light'},
    {name: 'Cinnamon', roast: 'Light'},
    {name: 'City', roast: 'Medium'},
    {name: 'American', roast: 'Medium'},
    {name: 'Breakfast', roast: 'Medium'},
    {name: 'High', roast: 'Dark'},
    {name: 'Continental', roast: 'Dark'},
    {name: 'New Orleans', roast: 'Dark'},
    {name: 'European', roast: 'Dark'},
    {name: 'Espresso', roast: 'Dark'},
    {name: 'Viennese', roast: 'Dark'},
    {name: 'Italian', roast: 'Dark'},
    {name: 'French', roast: 'Dark'}
]
function organizeCoffee(coffee) {
    var html = '<div class="coffee col-md-6">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<P class="center-letter">' + coffee.roast + '</P>';
    html += '</div>';
    return html;
}
function displayCoffees(coffees) {
    var table = document.getElementById('display-coffee-here');
    var html = '';
    for(var i = 0; i<coffees.length; i++) {
        html += organizeCoffee(coffees[i]);
    }
    return table.innerHTML = html;
}
displayCoffees(coffeeList);


var searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup',(e) => {
    var userInput = e.target.value;
    console.log(userInput);
    var matchingData = searchArrayOfObjects(userInput, coffeeList);
    renderCoffees(matchingData);
});
function searchArrayOfObjects(userInput, arrayList) {
    var filteredData = []
    for(var i = 0; i < arrayList.length; i++) {
        userInput = userInput.toLowerCase();
        var name = arrayList[i].name.toLowerCase()

        if(name.includes(userInput)) {
            filteredData.push(arrayList[i]);
        }
    }
    return filteredData;
}


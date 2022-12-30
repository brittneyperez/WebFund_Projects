// A Sandwich Factory
var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);

// The Pizza Oven
// Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven('deep dish', 'traditional', ['mozzarella', 'parmesan'], ['pepperoni', 'sausage']);
// console.log(pizza1);

var pizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);
// console.log(pizza2);

// var pizza3 = pizzaOven('hand tossed', 'traditional', ['mozzarella'], ['pepperoni']);
// console.log(pizza3);

// var pizza4 = pizzaOven('deep dish', 'marinara', ['feta'], ['mushrooms', 'olives']);
// console.log(pizza4);

var crustType = [
    'deep dish',
    'hand tossed',
    'thin and crispy',
    'cauliflower',
    'gluten-free',
    'hawaiin bread',
];

var sauceType = [
    'traditional',
    'marinara',
    'bbq',
    'white sauce',
    'nacho cheese',
    'tikka masala'
];

var cheeses = [
    'mozzarella',
    'cheddar',
    'swiss',
    'feta',
    'blue cheese',
    'goat cheese',
    'provolone',
    'parmesan',
    'vegan cheese'
];

var toppings = [
    'pepperoni',
    'sausage',
    'chicken',
    'olives',
    'onions',
    'bell peppers',
    'mushrooms',
    'anchovies'
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i]
}

function randomPizza () {
    var pizza = {};
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheeses = [];
    pizza.toppings = [];
    for (var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses))
    }
    for (var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings))
    }
    return pizza;
}

console.log(randomPizza());
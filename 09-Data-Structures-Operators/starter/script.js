'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring the array
const [x, y, z] = arr; //This is the destructuring assignment 
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

// Switching Variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// Switching Variables with Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values form a function 
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring 
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;


// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇
// Destructure OBJECTS . Curly braces are used to Destructure Objects
//1. When destructuring objects, the object properties have to be stated as is. However, the order is not important. 

const { name, openingHours, categories } = restaurant; //
console.log(name, openingHours, categories);

// 2. If you want to change the variable name from the property name
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// 3. Implementing Default values for object properties
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// 4. Mutating variables 
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);


// Nested Objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);
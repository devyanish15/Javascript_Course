/*














function logger() {
    console.log('my name is Jacob');
}

// Calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

///////////////////////////////////////
// Arrow function

// Arrow function - still a function expression
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, 'Jacob'));
console.log(yearsUntilRetirement(1980, 'Bob'));



///////////////////////////////////////
// Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Reviewing Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jacob'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀

// Calculates average score
// const calcAverage = (team, score1, score2, score3) => {
//     const averageScore = (score1 + score2 + score3) / 3;
//     console.log(`Average score for the ${team} was:`);
//     return averageScore;
// }

// Calculates average score - arrow function in one line
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

// Function to check winner with params of averages scores
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin win (${avgDolphins} vs. ${avgKoalas})`);
        // return `Dolphin win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Koalas win  (${avgKoalas} vs. ${avgDolphins})`)
        // return `Koalas win  (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        console.log('No winner')
        // return `No winner`;
    }
}

// console.log(checkWinner(avgDolphins, avgKoalas));
checkWinner(avgDolphins, avgKoalas);

// Test 2: Remove let as we don't want to create new variables - just re assign
avgKoalas = calcAverage(23, 34, 27);
avgDolphins = calcAverage(85, 54, 41);
console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);

// Values are totally independant from avg
// checkWinner(60, 30);


///////////////////////////////////////
// Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Literal syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

// Property .length - not 0 based
console.log(friends.length);

// To get the last element of the array
console.log(friends[friends.length - 1]);

// Only parimative value are mutable - we can mutate arrays.
friends[2] = 'Jacob';
console.log(friends);

// Data structure with an array inside an array
const jacob = ['Jacob', 'Cornwell', 2037 - 1996, 'Web Dev', friends];

console.log(jacob);
console.log(jacob.length);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);



///////////////////////////////////////
// Basic array methods

const friends = ['Michael', 'Steven', 'Peter'];

// .friends adds element to end of array - also logs array number
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// .unshift adds element to start of array
friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // last element
const popped = friends.pop(); // .pop logs removes element
console.log(popped);
console.log(friends);

friends.shift(); // first element
console.log(friends);

console.log(friends.indexOf('Steven')); // returns index of element
console.log(friends.indexOf('Bob')); // returns index -1 (not a element)

// Test with strict equality.
friends.push(23);
console.log(friends.includes('Steven')); // .includes true
console.log(friends.includes('Bob')); // false
console.log(friends.includes(23)); // true

if (friends.includes('Steven')) {
    console.log('You have a firend called peter');
};

*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀


// Function to calculate tip
const calcTip = function (bill) {
    // if (bill >= 50 && bill <= 300) {
    //     return (bill / 100) * 20;
    // } else {
    //     return (bill / 100) * 15;
    // }
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [];
const total = [];

console.log(bills);

// For loop to run through all bills and calculate tip
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}
console.log(tips);

// adds bills and tips to create total
total.push(bills[0] + tips[0]);
total.push(bills[1] + tips[1]);
total.push(bills[2] + tips[2]);
console.log(total);

///////////////////////////////////////
// Object Methods

const jacob = {
    firstName: 'Jacob',
    lastName: 'Cornwell',
    age: 2037 - 1996,
    job: 'Web Developer',
    friends: ['Michale', 'Peter', 'Steven']
};

console.log(jacob.age);

///////////////////////////////////////
// dot vs bracket notation

const jacob = {
    firstName: 'Jacob',
    lastName: 'Cornwell',
    age: 2037 - 1996,
    job: 'Web Developer',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jacob);

console.log(jacob.lastName);
console.log(jacob['lastName']); // Put any expressions

const nameKey = 'Name';
console.log(jacob['first' + nameKey]);
console.log(jacob['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jacob? Choose between firstName, lastName, age, job, friends');
// console.log(jacob.interestedIn); // is not a property on object jacob so use bracket notation

// if (jacob[interestedIn]) {
//     console.log(jacob[interestedIn]);
// } else {
//     console.log('This is not a property');
// }

// jacob.location = 'Leeds';
// jacob['twitter'] = '@jacob';
// console.log(jacob);

// Challenge
// 'Jacob has 3 friends, and his best frienst and his best freind is called Michael (first person in array)

console.log(`${jacob.firstName} has ${jacob.friends.length} friends, and his best friend is called ${jacob.friends[0]}`);

*/

///////////////////////////////////////
// object methods



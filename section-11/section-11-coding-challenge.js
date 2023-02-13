//coding challenge #1
// const checkDogs= function (dogsJulia, dogsKate){
//     const dogsJuliaCorrected = dogsJulia.slice();
//     dogsJuliaCorrected.splite(0, 1);
//     dogsJuliaCorrected.splite(-2);
    
//     const dogs = dogsJuliaCorrected.concat(dogsKate);
//     console.log(dogs);

//     dogs.forEach(function (dog, i){
//         if (dog >= 3){
//             console.log(`Dog number ${i+1} is an adult,and is ${dog} years old`);
//         } else {
//             console.log(`Dog number ${i+1} is still a puppy`);
//         }
    
//     });
// };
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//coding challenge #2
// const calcAverageHumanAge = function (ages) {
//     const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age *4));
//     const adults = humanAges.filter(age => age >= 18);
//     console.log(humanAges);
//     console.log(adults);

//     // const average = adults.reduce((acc ,age) => acc + age, 0) / adults.length;
//     const average = adults.reduce(
//         (acc, age, i, arr) => acc + age / arr.length,0);
//     return average;
    
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1,avg2);

// coding challenge #3
// const calcAverageHumanAge = function (ages) {
//     const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age *4));
//     const adults = humanAges.filter(age => age >= 18);

//     const average = adults.reduce(
//         (acc, age, i, arr) => acc + age / arr.length,0);
//     return average;
    
// };
// const calcAverageHumanAge = ages =>
//  ages
//  .map(age => (age <= 2 ? 2 * age : 16 + age *4))
//  .filter(age => age >= 18)
//  .reduce((acc, age, i, arr) => acc + age / arr.length, 0);


// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1,avg2);

// coding challenge #4
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice','Bob']},
    { weight: 8, curFood: 200, owners: ['Matilda']},
    { weight: 13, curFood: 275, owners: ['Sarah','john']},
    { weight: 32, curFood: 340, owners: ['Michael']},
    
];

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 *28)));

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
    `Sarah's dog is eating too ${
        dogSarah.curFood > dogSarah.recFood ? 'much' :
        'little'
    }`
);
const ownersEatTooMuch = dogs
.filter(dog =>dog.curFood > dog.curFood)
.map(dog => dog.owners)
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
.filter(dog =>dog.curFood > dog.curFood)
.map(dog => dog.owners)
// .flat();
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join('and')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join('and')}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.recFood));

const checkEatingOkay = dog =>
dog.curFood > dog.recFood * 0.9 && dog.curFood <
dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

console.log(dogs.filter(checkEatingOkay));

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
// // // const age = 29;
// // // const newValue = age >= 20 ? `😎❤😘` : `Powel nahuy`;

// // // console.log(newValue);

// // let bill = 275;
// // let tip;
// // tip = 50 <= bill && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);

// // function calculateSomething(number1, number2) {
// //   const number = number1 > 5 && number1 < 10 ? 50 : 100;
// //   const numbeR = number2 > 100 && number < 200 ? 44 : 444;
// //   return number + numbeR;
// // }

// // console.log(calculateSomething(11, 101));

// // const myFunction = function (name) {
// //   return name.toUpperCase().slice(0, 5);
// // };

// // console.log(myFunction(`ih`));

// // const flowersNum = (flowers) => flowers * 2;

// // console.log(flowersNum(4));

// // const age = (myAge) => 2037 - myAge;

// // function yearthToRetirement(birthYear, firstName) {
// //   age1 = age(birthYear);
// //   const retirement = 65 - age1;
// //   return `${firstName} year of retirement is ${retirement}`;
// // }
// // console.log(yearthToRetirement(1995, `Ihor`));

// const avarage = (firstScore, secondScore, thirdScore) => {
//   return (firstScore + secondScore + thirdScore) / 3;
// };

// const scoreDolphins = avarage(85, 54, 41);
// const scoreKoalas = avarage(23, 34, 27);
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else return cons`No team wins...`;
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));

function largestNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) return num3;
}

console.assert(largestNumber(1, 2, 3) === 3, "return largest number in third position");
console.assert(largestNumber(7, 2, 3) === 7, "return largest number in first position");
console.assert(largestNumber(1, 10, 3) === 10, "return largest number in second position");

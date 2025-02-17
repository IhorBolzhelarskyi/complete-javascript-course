// const object = {
//   name: `Ihor`,
//   surename: `Bolzhelarskyi`,
//   birthYeah: 1995,
//   empployed: true,
//   friends: [`Krisitna`, `Anna`, `lina`],
//   calcAge: function () {
//     this[`age`] = 2037 - this.birthYeah;
//     return this.age;
//   },
//   job: `fork lift driver`,
//   getSummary: function () {
//     return `${this.name} is a ${object.calcAge()}-years old ${this[`job`]}, and he has ${
//       this.empployed ? `a` : `no`
//     } driver's license`;
//   },
//   push: function (mamba, name) {
//     return (mamba = name);
//   },
// };

// // object.calcAge();
// // console.log(object);
// // console.log(object.age);

// // // string = `${object.name} is a ${object[`age`]}-year old ${object.job}, and he has ${
// // //   object.empployed ? `a` : `no`
// // // } driver's license`;

// // // console.log(string);
// // console.log(object.getSummary());

// object.push(object.`salary`, 2500);
// console.log(object);

const mark = {
  fullName: `Mark Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: `John Smith's`,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(`${john.fullName} BMI (${john.bmi}) is higher than ${mark[`fullName`]} (${mark.bmi})`);
} else if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName} BMI (${mark.bmi}) is higher than ${john[`fullName`]} (${john.bmi})`);
}

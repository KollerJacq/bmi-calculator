// Feel free to look for the problem in this code!

// challenge from udemy-course. Even though the calculation itself was right, it still wouldn't pass the test.
//--> Solution
//Had to invest 1-2 hours to find out that is was a wrong placed '}' in the output. :D

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const higherBMI =
  mark.calcBMI() > john.calcBMI()
    ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullName
      }'s (${john.calcBMI()})!`
    : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
        mark.fullName
      }'s (${mark.calcBMI()})!`;

// Before solution:
/*
      const higherBMI =
  mark.calcBMI() > john.calcBMI()
    ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullName
      }'s (${john.calcBMI()})}!`
    : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
        mark.fullName
      }'s (${mark.calcBMI()})}!`;
      */

console.log(higherBMI);

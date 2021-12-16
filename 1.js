/*

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.

*/



function bmi(mass, height) {
    res = mass / height ** 2
    return res
}


const mark = {
    mass: 78,
    height: 1.69
}

const john = {
    mass: 92,
    height: 1.76
}

const markbmi = (bmi(mark.mass, mark.height))
const johnbmi = (bmi(john.mass, john.height))

const markHigherBMI = bmi(mark.mass, mark.height) > bmi(john.mass, john.height)

console.log(markHigherBMI)

if (markHigherBMI) {
    console.log(`Mark's BMI(${markbmi}) is higher than John's BMI(${johnbmi})!`)
} else {
    console.log(`Mark's BMI(${markbmi}) is lower than John's BMI(${johnbmi})!`)
}
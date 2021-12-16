



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
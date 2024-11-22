//html

let upperLimit = 120;
let lowerLimit = 20;

if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) {
    for (let i = upperLimit; i >= lowerLimit; i -= 10) {
        console.log(i);
    }
}
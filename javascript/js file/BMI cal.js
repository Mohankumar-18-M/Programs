function cal_BMI(x,y) {
    let bmi = x / (y * y);
    return bmi;
}

function det_BMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

const weight = parseFloat(prompt("Enter your weight in kilograms:"));
const height = parseFloat(prompt("Enter your height in meters:"));

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    console.log("Please enter valid positive numbers for weight and height.");
} else {
    const bmi = cal_BMI(weight, height);
    const bmiCategory = det_BMI(bmi);
    console.log(`Your BMI is: ${bmi.toFixed(2)}`);
    console.log(`Your BMI category is: ${bmiCategory}`);
}

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

weightInput.addEventListener("input", calculateBMI);
heightInput.addEventListener("input", calculateBMI);

function calculateBMI() {
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    if (!weight || !height) {
        document.getElementById("result").innerText = "Enter valid values";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let message = "";

    if (bmi < 18.5) {
        message = "Underweight";
    } else if (bmi < 25) {
        message = "Normal weight";
    } else if (bmi < 30) {
        message = "Overweight";
    } else {
        message = "Obese";
    }

    document.getElementById("result").innerText =
        `BMI: ${bmi} (${message})`;
}
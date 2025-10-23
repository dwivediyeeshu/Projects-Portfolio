const form = document.querySelector("form");
const bmiText = document.querySelector("#bmi");
const descText = document.querySelector("#desc");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);

  if (height === "" || height <= 0 || isNaN(height)) {
    bmiText.textContent = `${height}`;
    descText.textContent = "Enter a Valid Height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    bmiText.textContent = `${weight}`;
    descText.textContent = "Enter a Valid Weight";
  } else {
    const bmi = (weight / (Math.pow(height, 2) / 10000)).toFixed(2);
    const desc = interpretBMI(bmi)

    bmiText.textContent = bmi;
    bmiText.className = desc;
    descText.innerHTML = `You are <strong>${desc}</strong>`;
  }
});

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "healthy";
  } else if (bmi >= 25 && bmi < 30) {
    return "overweight";
  } else {
    return "obese";
  }
}

form.addEventListener('reset', function (e) {
   bmiText.textContent = '0'
   descText.textContent = "N/A" 
});

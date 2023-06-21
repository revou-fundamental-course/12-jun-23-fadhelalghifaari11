// Get DOM elements
const celsiusInput = document.getElementById('celsius-input');
const fahrenheitOutput = document.getElementById('fahrenheit-output');
const convertBtn = document.getElementById('convert-btn');
const resetBtn = document.getElementById('reset-btn');
const reverseBtn = document.getElementById('reverse-btn');
const calculationSteps = document.getElementById('calculation-steps');

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Event listener for convert button
convertBtn.addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);

  if (!isNaN(celsius)) {
    const fahrenheit = celsiusToFahrenheit(celsius);
    fahrenheitOutput.value = fahrenheit.toFixed(2);
    calculationSteps.textContent = `(${celsius} °C * 9/5) + 32 = ${fahrenheit.toFixed(2)} °F`;
  } else {
    fahrenheitOutput.value = '';
    calculationSteps.textContent = 'Masukkan nilai suhu yang valid.';
  }
});

// Event listener for reset button
resetBtn.addEventListener('click', () => {
  celsiusInput.value = '';
  fahrenheitOutput.value = '';
  calculationSteps.textContent = '(Cara mengkalkulasinya)';
});

// Event listener for reverse button
reverseBtn.addEventListener('click', () => {
  const fahrenheit = parseFloat(fahrenheitOutput.value);

  if (!isNaN(fahrenheit)) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    celsiusInput.value = celsius.toFixed(2);
    calculationSteps.textContent = `(${fahrenheit} °F - 32) * 5/9 = ${celsius.toFixed(2)} °C`;
  } else {
    celsiusInput.value = '';
    calculationSteps.textContent = 'Masukkan nilai suhu yang valid.';
  }
});

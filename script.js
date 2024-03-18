function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let resultText = '';
  
    if (inputUnit === 'celsius') {
      const fahrenheit = (inputValue * 9 / 5) + 32;
      resultText = `${inputValue} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
    } else {
      const celsius = (inputValue - 32) * 5 / 9;
      resultText = `${inputValue} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius.`;
    }
  
    document.getElementById('result').innerText = resultText;
  }
  
function performCalculation() {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;
    const resultInput = document.getElementById("result");
    const errorInput = document.getElementById("error");
    const operation = document.querySelector(
      'input[name="operation"]:checked'
    );

    resultInput.innerHTML = "";
    errorInput.innerHTML = "";

    if (num1 === "" || num2 === "") {
      errorInput.innerHTML = "Vui lòng nhập đầy đủ cả hai số.";
      return;
    }

    if (!operation) {
      errorInput.innerHTML = "Vui lòng chọn phép tính.";
      return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    switch (operation.value) {
      case "add":
        result = number1 + number2;
        break;
      case "subtract":
        result = number1 - number2;
        break;
      case "multiply":
        result = number1 * number2;
        break;
      case "divide":
        if (number2 === 0) {
          errorInput.innerHTML = "Không thể chia cho 0.";
          return;
        }
        result = number1 / number2;
        break;
    }

    resultInput.innerHTML = "Kết quả: " + result;
}
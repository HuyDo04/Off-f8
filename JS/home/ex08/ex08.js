function calculateBill() {
    let bill = document.getElementById("billAmount").value;
    let people = document.getElementById("peopleCount").value;
    let tip = document.getElementById("tipAmount").value;
    let resultElement = document.getElementById("result");

    if (bill === "" || people === "" || tip === "") {
      resultElement.innerHTML = "Vui lòng nhập đầy đủ thông tin!";
      return;
    }

    bill = parseFloat(bill);
    people = parseInt(people);
    tip = parseFloat(tip);

    if (bill <= 0) {
      resultElement.innerHTML = "Tổng bill phải lớn hơn 0!";
      return;
    }
    if (people <= 0 || !Number.isInteger(people)) {
      resultElement.innerHTML = "Số người phải là số nguyên dương!";
      return;
    }
    if (tip > bill) {
      resultElement.innerHTML = "Tiền tip không hợp lệ!";
      return;
    }

    let totalAmount = bill + tip;
    let amountPerPerson = totalAmount / people;

    resultElement.innerHTML = `Tổng tiền: ${totalAmount.toFixed(0)} đồng<br>Mỗi người trả: ${amountPerPerson.toFixed(0)} đồng`;
  }
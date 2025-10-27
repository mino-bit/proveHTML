function appendNumber(num) {
  document.getElementById("display").value += num;
}

function calculate() {
  const result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}

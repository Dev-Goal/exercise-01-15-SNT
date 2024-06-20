let btnCheck = document.getElementById("btn");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let numberNT = Number(document.getElementById("number").value);
  let message = "";
  isPrime(numberNT)


  function isPrime(numberNT) {
    let count = 0;
    let isPrime = false;

    if (numberNT == 0 || numberNT == 1) {
      message = numberNT + " không phải là số nguyên tố";
    } else {
      for (let i = 1; i <= numberNT; i++) {
        if (numberNT % i == 0) {
          count += 1;
        }
      }
      if (count == 2) {
        isPrime = true;
      }
      if (isPrime) {
        message = numberNT + " là số nguyên tố";
      } else {
        message = numberNT + " không phải là số nguyên tố";
      }
    }
    
  }
  document.getElementById("result").innerHTML = message;
}

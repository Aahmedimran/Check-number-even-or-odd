function calculate() {
    let num = document.getElementById('oddeven').value;


    if ((num % 2) === 0) {
        num = document.getElementById('show').innerHTML = `Hurray! Your ${num} is an even number`;

    } else {
        num = document.getElementById('show').innerHTML = `Ooops! Your ${num} is an Odd number`;
    }
}
function is_positive(number) {
    return (number > 0);
}

function is_even(number) {
    return (number % 2 === 0);
}

function is_two_digits(number) {
    return (10 <= number && number < 100 && Number.isInteger(number));
}

function check_condition1() {
    let A = +(document.getElementById('value_A').value);

    if (isNaN(A) || !Number.isInteger(A)) {
        document.getElementById('output1').innerHTML = 'Некорректно введены данные, измените ввод!';
    } else if (is_positive(A) && is_two_digits(A)) {
        document.getElementById('output1').innerHTML = "True";
    } else {
        document.getElementById('output1').innerHTML = "False";
    }
}

function check_condition2() {
    let num = +(document.getElementById('value_num').value);

    if (isNaN(num) || !Number.isInteger(num)) {
        document.getElementById('output2').innerHTML = 'Некорректно введены данные, измените ввод!';
    } else if (is_positive(num) && is_even(num)) {
        document.getElementById('output2').innerHTML = `${num + 1}`;
    } else {
        document.getElementById('output2').innerHTML = `${num}`;
    }
}

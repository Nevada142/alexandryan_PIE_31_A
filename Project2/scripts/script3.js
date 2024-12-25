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

function solve_func(x) {
    let a = 2.1;
    let b = 6.7;

    if (x < -2) {
        return Math.pow(x, 3) + 2 * a;
    } else if (x <= 5) {
        return Math.log(Math.abs(Math.cos(b*x)));
    } else {
        return Math.pow(x, 2) * Math.exp(x);
    }
}

function solve_func4(x) {
    let a = 2.1;
    let b = 6.7;

    switch(x){
        case -3: 
            return Math.pow(x, 3) - 2 * a;
        case 4:
            return Math.log(Math.abs(Math.cos(b*x)));
        case 6:
            return Math.pow(x, 2) * Math.exp(x);
        default:
            return "Функция не определена при таком значении Х"
    }
}

function get_func_result() {
    let x = +(document.getElementById('value_x').value);
    document.getElementById('output3').innerHTML = `${solve_func(x)}`;
}

function get_func_result4() {
    let x = +(document.getElementById('value_x4').value);
    document.getElementById('output4').innerHTML = `${solve_func4(x)}`;
}




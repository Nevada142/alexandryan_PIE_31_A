function is_even(number) {
    return (number % 2 === 0 && Number.isInteger(number));
}

function calculate_evens() {
    let flag = true;
    let cnt = 0
    let productOfEven = 1;
    let text = (document.getElementById('numbersInput').value);
    let numbers = text.split(',');

    for (let i = 0; i<10; i++){
        if (is_even(+numbers[i])) {
            productOfEven = productOfEven * +numbers[i];
            cnt++
        } 

        if (isNaN(+numbers[i])){
            flag = false;
        }
    }
    
    if (flag){
        document.getElementById('output1').innerHTML = `${productOfEven}`
    } else {
        document.getElementById('output1').innerHTML = 'Неккоректный ввод!'
    }

    if (cnt === 0){
        document.getElementById('output1').innerHTML = 'Нет четных чисел!'
    }

}

function calculate_sequence() {
    let max = +document.getElementById('value_max').value;
    let min = +document.getElementById('value_min').value;
    let step = +document.getElementById('value_step').value;
    let numbers = [];

    if (isNaN(max) || isNaN(min) || isNaN(step) || step === 0 || max < min) {
        document.getElementById('output2').innerHTML = 'Ошибка: введите корректные значения.';
        return; 
    }

    for (let i = min; i <= max; i += step) {
        numbers.push(i);
    }

    document.getElementById('output2').innerHTML = `${numbers.join(' ')}`;
}
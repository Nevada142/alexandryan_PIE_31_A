

function calculate_cube(num){
    if (isNaN(num) || !Number.isInteger(num)) {
        return  'Некорректно введены данные, измените ввод!';
    } else {
        return Math.pow(num, 3)
    }
}

function get_cube(){
    let a = +document.getElementById("value_a").value
    let b = +document.getElementById("value_b").value
    let c = +document.getElementById("value_c").value
    let d = +document.getElementById("value_d").value
    document.getElementById("output1").innerHTML = `A = ${calculate_cube(a)}; B = ${calculate_cube(b)}; C = ${calculate_cube(c)}; D = ${calculate_cube(d)}`
}


function generate_array(N){
    let cnt = 1;
    let numbers = [];
    
    if (isNaN(N) || !Number.isInteger(N) || N > 10) {
        return  'Некорректно введены данные, измените ввод!';
    } else {
        for (let i = 0; i < N; i++){
            numbers.push(cnt);
            cnt += 2;
        }
        return numbers
    }
}

function get_array(){
    let N = +document.getElementById('value_n').value
    document.getElementById('output2').innerHTML = `${generate_array(N)}`
}





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
    document.getElementById('output1').innerHTML = `${generate_array(N)}`
}


function generate_array2(A, B, C){
    for (let i = 0; i < A.length; i++){
        if (isNaN(A[i]) || isNaN(B[i])){
            return 'Некорректно введены данные, измените ввод!'
        } else {
            C.push(Math.max(A[i], B[i]))
        }
    }        
    return C
}

function get_array2(){
    let C = []
    let A = (document.getElementById('array_A').value).split(',')
    let B = (document.getElementById('array_B').value).split(',')

    if (A.length > 10 || B.length > 10){
        document.getElementById('output2').innerHTML = 'Больше 10 элементов!'
        return
    }

    if (A.length !== B.length){
        document.getElementById('output2').innerHTML = 'Не совпадает длина массивов!'
    } else {
        document.getElementById('output2').innerHTML = `${generate_array2(A, B, C)}`
    }
    
}
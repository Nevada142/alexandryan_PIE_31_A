function calculate_perimeter_square(){
    let a = parseInt(document.getElementById('value_a').value)

    if (isNaN(a) || a < 0){
        document.getElementById('output1').innerHTML = 'Неккоректно введены данные, измените ввод!'

    } else {
        let result = a*4*a*4
        document.getElementById('output1').innerHTML = result
    }
}


function calculate_meters(){
    let L = parseInt(document.getElementById('value_l').value)

    if (isNaN(L) || L < 0){
        document.getElementById('output2').innerHTML = 'Неккоректно введены данные, измените ввод!'

    } else {
        let result = Math.trunc(L / 100)
        document.getElementById('output2').innerHTML = result
    }
}
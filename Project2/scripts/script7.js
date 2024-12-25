function generate_array71(M, N){
    let matrix = []
    for (let i = 0; i<M; i++){
        let row = []
        for (let j = 0; j<N; j++){
            row.push(10*(i+1))
        }
        matrix.push(row)
        
    }

    return matrix
}

function get_array71(){
    let M = +document.getElementById('value_m').value
    let N = +document.getElementById('value_n').value
    let array_text = ""
    let matrix0 = generate_array71(M, N)
    for (let i = 0; i<M; i++){
        let row = ''
        for (let j = 0; j<N; j++){
            row += `${matrix0[i][j]} ` 
        }
        array_text += (row + "</br>")
    }
    document.getElementById('output1').innerHTML = `</br>${array_text}`
}



function generate_array72(M, N) {
    let matrix = [];
    for (let i = 0; i < M; i++) {
        let row = [];
        for (let j = 0; j < N; j++) {
            let num = Math.floor(Math.random() * 6) + 1; 
            row.push(num);
        }
        matrix.push(row);
    }
    return matrix; 
}

function change_array72(matrix0, M, N) {
    let i_max = 0;
    let num_max = matrix0[0][0];
    let i_min = 0;
    let num_min = matrix0[0][0];

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix0[i][j] > num_max) {
                num_max = matrix0[i][j];
                i_max = i;
            }
            if (matrix0[i][j] < num_min) {
                num_min = matrix0[i][j];
                i_min = i;
            }
        }
    }

    
    if (i_max !== i_min) {
        let temp = matrix0[i_max];
        matrix0[i_max] = matrix0[i_min];
        matrix0[i_min] = temp;
    }

    return matrix0; 
}

function get_array72() {
    let M = +document.getElementById('value_M').value;
    let N = +document.getElementById('value_N').value;

    let matrix0 = generate_array72(M, N);

    let start_array_text = matrix0.map(row => row.join(' ')).join('</br>');

    let matrix1 = change_array72(matrix0, M, N)
    
    let array_text = matrix1.map(row => row.join(' ')).join('</br>');

    document.getElementById('output2').innerHTML = `
        Исходная матрица:</br>${start_array_text}</br></br>
        Изменённая матрица:</br>${array_text} `;
}

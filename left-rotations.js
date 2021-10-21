'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

main();
/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {

    //Se realiza un for para recorrer las rotaciones
    for (let i=0; i<d; i++) {
        //Se agrega el elemento 0 al array al final
        a.push(a[0])
        //Se elimina el elemento 0 del array
        a.splice(0, 1);
    }
    return a;

}


function main() {
    const d = 10; //Número de rotaciones

    const a = [41, 73, 89,  7, 10,  1, 59, 58, 84, 77, 77, 97, 58,  1, 86, 58, 26, 10, 86, 51] //Array

    const result = rotLeft(a, d);

    console.log(result);
}

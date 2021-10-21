
/*
 * HOURGLASS HACKERRANK EXERCISE.
 */

'use strict';

main();

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {

    let hourglass;
    let maxHourglass=[];

    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
        //Se realiza la suma de cada reloj de arena en la matriz
        hourglass = arr[i][j]   + arr[i][j+1]   + arr[i][j+2]
                                + arr[i+1][j+1]
                + arr[i+2][j]   +arr[i+2][j+1]  + arr[i+2][j+2]
        //Se guardan las sumas de cada reloj de arena en un array
        maxHourglass.push(hourglass);
        }
    }
//Se regresa el elemento máximo del array (Se usa el spred operator para evitar el NaN ya que se esta usando una función matematica con un array)
return Math.max(...maxHourglass);
}

function main() {

    let arr = Array(6);

    arr = [
        [ 1, 1, 1, 0, 0, 0 ],
        [ 0, 1, 0, 0, 0, 0 ],
        [ 1, 1, 1, 0, 0, 0 ],
        [ 0, 0, 2, 4, 4, 0 ],
        [ 0, 0, 0, 2, 0, 0 ],
        [ 0, 0, 1, 2, 4, 0 ]]

    const result = hourglassSum(arr);
    console.log(result + '\n');

}
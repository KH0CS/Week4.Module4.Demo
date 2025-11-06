let myGrades = [76, 54, 89, 94, 78];  // an array with 5 elements inside.

/* arrays are zero based, meaning the first element stored in an array is in position 0. Visually...
*   values =>   |76|54|89|94|78|
*   position => |0 |1 | 2| 3| 4|
*
*   Syntax to access the elements inside an array
*   myGrades[0] => 76
    myGrades[4] => 78
    */

    function iterate (array){
        for(let i = 0, i < array.length; i++){
            console.log(`myGrades[${i}]; $(myGrades[i]}`)
        }
    }
// var day = 'martes'

// //TERNARIO

// var isTpApproved = true

// var congrats = isTpApproved ? 'felicitaciones!' : ':('
// console.log (congrats)

// var classDays = [
//     'martes',
//     'jueves',
//     'viernes',
// ]

// var count = 0
// // while (count < 10) {
// //     console.log (count)
// //     ++count
// // }

// while (count < classDays.lenght){
//     console.log (classDays[count])
//     ++count
// }

// do {
//     console.log (classDays[count])
//     ++count
// }while (count < classDays.lenght)

// for (var i=0; i < classDays.lenght ; ++i){
//     console.log(classDays[i])
// }

var greysTemp1 = [
    'GA - A Hard Days Night', 
    'GA - The First Cut is the Deepest', 
    'GA - Winning a Battle, Losing the War',
    "GA - No Man's Land",
    'GA - Shake Your Groove Thing',
    'GA - If Tomorrow Never Comes',
    'GA - The Self-Destruct Button',
    'GA - Save Me',
    "GA - Who's Zoomin' Who?",
]

var erTemp1 = [
    'ER - 24 Hours',
    'ER - Day One',
    'ER - Going Home',
    'ER - Hit and Run',
    'ER - Into that Good Night',
    'ER - Chicago Heat',
    'ER - Another Perfect Day',
    'ER - 9½ Hours',
    'ER - ER Confidential',
    'ER - Blizzard',
    'ER - The Gift',
    'ER - Happy New Year',
    'ER - Luck of the Draw',
    "ER - Long Day's Journey",
    "ER - Feb 5, '95",
    'ER - Make of Two Hearts',
    'ER - The Birthday Party'
]

var allSeries = [greysTemp1,erTemp1]

// CON ESTA ANIDACIÓN DE FORs RESOLVEMOS LA IMPRESIÓN AUTOMÁTICA DE AMBOS ARRAYS

// for (var i = 0; i < allSeries.length; i++){
//     // console.log(allSeries[i])
//     for (var j = 0; j < allSeries[i].length; j++){
//         console.log(allSeries[i][j])
//     }
// }

/* 
var showArray = greysTemp1;

// for (i = 0; i < showArray.length; ++i){
//     console.log(showArray[i])
// }

// var count = 1;
// if (count < showArray.length){
for (i = 0; i < showArray.length; ++i){
    console.log (showArray[i])
    if (i =  showArray.length){
        showArray = erTemp1;
        for (j = 0; j < showArray.length; ++j){
            console.log (showArray[j])
           }
        }
    }
 */

// function printValues (param){
//     console.log (param)
// }

// printValues('hola');

// function greetings (a,b){
//     console.log('hola, '+a+' y '+b)
// }

// greetings ('Vero','Valen');

// function summ(num1,num2){
//     var message = 'el valor de la suma es: '
//     var aux = num1 + num2
//     return message + aux
// }

// console.log(summ(5,5));

var weekDays = ['Lunes','Martes','Miércoles','Jueves','Viernes']

var list = weekDays

function printExercise (list,msgs){
    for (var i = 0; i < list.length; i++){
        console.log(msgs+' '+list.[i])
    }
}

printExcercise(list,'es un día de la semana');
printExercise(greysTemp1,' Temporada 1');
printExercise(erTemp1,' top temp 1');
// En las primeras 3 preguntas, reemplazar `null` por la respuesta

// crear una variable que contenga un string (el string puede contener cualquier cosa)
var newString = "Ada";

// crear una variable que guarde cualquier número
var newNum = 4;

// crear una variable que guarde un booleano
var newBool = false;

// EJERCICIO 1
// a y b son dos numeros
// sumar a y b
// guardar el resultado en la variable `resultadoSuma`
var a = 3;
var b = 7;
var resultado = a + b;
// aca va la solucion

console.log(resultado); // 10


// EJERCICIO 2
// a y b son dos numeros
// restar a y b
// guardar el resultado en la variable `resultado`
a = 8;
b = 5;
resultado = a - b;
// aca va la solucion

console.log(resultado); // 3


// EJERCICIO 3
// a y b son dos numeros
// dividir a y b
// guardar el resultado en la variable `resultado`
a = 12;
b = 3;
resultado = a / b;
// aca va la solucion

console.log(resultado); // 4


// EJERCICIO 4
// a y b son dos numeros
// multiplicar a y b
// guardar el resultado en la variable `resultado`
a = 12;
b = 3;
resultado = a * b;
// aca va la solucion

console.log(resultado); // 36


// EJERCICIOS DE https://hackmd.io/uICS-gJITh-fLoSUIycVNQ

/* 
EJERCICIO 1
Booleans
Tenemos que crear algunas variables para que el siguiente programita de el resultado espeardo.
Agregá las variables necesarias asignando el valor booleano correcto.
*/ 
var jsEsLoMas = true;
var supermanMejorQueBatman = true;
var calculoCorrecto = true;
var pentagonoCon6Lados = false;

// No editar de esta linea para abajo
console.log("¿Javascript es el mejor lenguaje?", jsEsLoMas);
console.log("¿Es Superman mejor que Batman?", supermanMejorQueBatman);
console.log("¿Es 1 + 1 = 2?", calculoCorrecto);
console.log("¿Un pentágono tiene 6 lados?", pentagonoCon6Lados);


/*
EJERCICIO 2
Calculador de impuestos
Un negocio necesita un programa para calcular cuantos necesita sumar de impuestos a una compra.
El porcentaje de impuestos es del 15% sobre el precio del producto.
*/
var producto = "Eloquent Javascript";
var precio = 390.5;
var impuestos = precio * 15 / 100;
var total = precio + impuestos;

console.log("Producto vendido: " + producto);
console.log("Precio: $" + precio);
console.log("Impuestos: $" + impuestos);
console.log("Total: $" + total);


/*
EJERCICIO 3
El mismo negocio del ejercicio anterior nos pide que agreguemos una variable cantidad 
para indicar la cantidad que se vendió de ese producto. 
¿Qué cambio harías en el calculo de la variable total para implementar el nuevo pedido del cliente?
*/

var producto = "Eloquent Javascript";
var precio = 390.5;
var impuestos = precio * 15 / 100;
var cantidad = 3;
var total = (precio + impuestos) * cantidad;

console.log("Producto vendido: " + producto);
console.log("Precio: $" + precio);
console.log("Impuestos: $" + impuestos);
console.log("Cantidad vendida: " + cantidad);
console.log("Total: $" + total);


/* 
EJERCICIO 4
Guardar en la variable resto el resto de dividir 11 por 3, utilizando el operador módulo o resto (%).
*/
var resto = 11 % 3;

console.log(resto);


/* 
EJERCICIO 5
Tenemos tres números, que vamos a representar con las variables a, b y z, y queremos 
mostrar el resto de dividir la variable a por 3, la variable b por 5 y la variable c por 8. 
Completá el código para mostrar el resultado esperado.
*/

var a = 9;
var b = 17;
var c = 38;

var restoDeADividaPor3 = a % 3;
var restoDeBDividaPor5 = b % 5;
var restoDeCDividaPor8 = c % 8;

console.log("El resto de dividir a por 3 es ", restoDeADividaPor3);
console.log("El resto de dividir b por 5 es ", restoDeBDividaPor5);
console.log("El resto de dividir c por 8 es ", restoDeCDividaPor8);
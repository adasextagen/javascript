var newString = "Valentina";
var newNum = 12;
var newBool = true;

var a = 3;
var b = 7;

var resultadoSuma = a + b;

console.log ("a+b=", resultadoSuma);

// EJERCICIO 2

a = 8;
b = -5;

var resultadoResta = a - b;

console.log("a-b=",resultadoResta);

// EJERCICIO 3

a = 12;
b = 3;

var resultadoDivision = a / b;

console.log("a/b=",resultadoDivision);

// EJERCICIO 4.1

var jsEsLoMas = true;
var supermanMejorQueBatman = false;
var calculoCorrecto = true;
var pentagonoCon6Lados = false;

// No editar de esta linea para abajo
console.log("¿Javascript es el mejor lenguaje?", jsEsLoMas);
console.log("¿Es Superman mejor que Batman?", supermanMejorQueBatman);
console.log("¿Es 1 + 1 = 2?", calculoCorrecto);
console.log("¿Un pentágono tiene 6 lados?", pentagonoCon6Lados);

// EJERCICIO 4.2

var producto = "Eloquent Javascript";
var precio = 390.5;
var impuestos = precio * 0.15;// COMPLETAR ESTA LINEA
var total = precio + impuestos;

console.log("Producto vendido: " + producto);
console.log("Precio: $" + precio);
console.log("Impuestos: $" + impuestos);
console.log("Total: $" + total);

// EJERCICIO 4.3

var cantidad = (total - impuestos) / precio;
console.log("Se vendieron ",cantidad," ", producto);

// EJERCICIO 4.4

var resto = 11 % 3;
console.log(resto);

// EJERCICIO 4.5

var a = 9;
var b = 17;
var c = 38;

var restoDeADividaPor3 = a % 3; // COMPLETAR ESTA LINEA
var restoDeBDividaPor5 = b % 5; // COMPLETAR ESTA LINEA
var restoDeCDividaPor8 = c % 8; // COMPLETAR ESTA LINEA

console.log("El resto de dividir a ",a," por 3 es ", restoDeADividaPor3);
console.log("El resto de dividir b ",b," por 5 es ", restoDeBDividaPor5);
console.log("El resto de dividir c ",c," por 8 es ", restoDeCDividaPor8);

// creacion de variable
var class_location;

// asignacion de valor
class_location = "IBM"

// creación de variable y asignacion en una misma linea
var generation = "sexta";

// se imprime en la consola el mensaje asignado 
/* otra forma de hacer comentarios */
console.log(generation, class_location);

var type_string = "texto plano" // string corresponde a texto
var type_number = 12345 // valores numéricos
var type_boolean = true // verdadero o falso, true o false
var type_undefined; // valor por defecto: undefined
var type_null = null //

// typeof nos permite saber el tipo de dato almacenado en una variable
console.log(typeof type_boolean)

var a = 20
var b = 2

// operadores aritméticos
console.log('suma: ', a+b)
console.log('resta: ', a-b)
console.log('multiplicación: ', a*b)
console.log('división: ', a/b)
console.log('resto: ', a%b)


// operador de incremento y decremento
console.log(++a) // aumenta en una unidad la variable numérica
console.log(--a) // decrementa en una unidad la variable numérica

console.log(b+=a) // realiza una suma y guarda el resultado en la variable original
console.log(b-=a) // realiza una resta y guarda el resultado en la variable original

// operadores de comparación
var user_pass;
var server_pass = null

console.log( user_pass == server_pass) // comparación de igualdad (vaga)
console.log( user_pass != server_pass) // comparación de diferencia (vaga)

console.log( user_pass === server_pass) // comparación de igualdad (stricta)
console.log( user_pass !== server_pass) // comparación de diferencia (stricta)
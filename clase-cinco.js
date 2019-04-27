// funciones

/* 
estructura base de una funcion:
-palabra reservada 
-nombre de la función 
-parentesis para parametros si es necesario
-llaves para definir el alcance de la función o scope  
*/

function sayHi(){
  console.log('hi')
}

/* la misma funcion tambien puede ser definida dentro de una variable, ya que las funciones en si mismas son tipos de datos */

var sayHiInAVar = function(){
  console.log('hi')
}

// recibiendo parametross
function summ(num1, num2){
  var message = 'el valor de la suma es '
  var aux = num1 + num2
  return message + aux
}
console.log( summ(5,5) )

// recibiendo parametros, y parametros con valores pre establecidos
function greetings(e, i = 'desconocido'){
  console.log('hola, '+e+' y '+i)
}

function funcionDeEjercicio(list, msg){
  for(var i = 0; i < list.length; i++){
    console.log(msg+' '+list[i])
  }
}

var customList = ['uno', 'dos', 'tres']
funcionDeEjercicio(customList, 'mensaje')
funcionDeEjercicio(alpha, 'letra:')
funcionDeEjercicio(nums, 'Número:')

printMessage('hola')

// creando un modelo de modelo de objeto con una función
function student(name, course){
  this.name = name;
  this.course = course;
  this.greet = function(){
    console.log('Hola, mi nombre es '+name)
  }
}

var pilar = new student('pilar', 'sexta')

console.log(pilar.name)
pilar.greet()
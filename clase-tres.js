var a = true
var b = 1
var c = 2
var d = true

if(b === 1 || c !== 2){
  console.log('se cumple la condicion')
}

var charactersALive = {
  john: true,
  dany: true,
  ned: false
}

charactersALive.theon = true
console.log(charactersALive.theon)

/*
  - creaer un objeto con x propiedades
  - cuando se cumpla una condición, asiganr una propiedad nueva con una valor nuevo
  - imprimir la condicion y el valor de la nueva propiedad
*/

var jonSnow = {
  age: 35,
  isAlive: true,
  isStark: true
}

var res = b+c === 3

if(res){
  jonSnow.role = 'king in the north'
  console.log(res,jonSnow.role )
}

var zara = ['prenda zara', 'prenda zara']
var vitamina = ['prenda vitamina', 'prenda vitamina']

if(user.size !== 'm'){
  user.brand = zara;
} else {
  user.brand = vitamina;
}

console.log(user.brand)

var user = {
  size: 'm',
  color: 'azul',
  fabric: 'silk' 
}

var zara = {
  label: 'zara',
  size: 's',
  color: 'verde'
}

var vitamina = {
  label: 'vitamina',
  size: 's',
  color: 'rojo'
}

if( user.size === zara.size){
  user.brand = zara;
}else{
  user.brand = vitamina;
}

console.log(user.brand)

var gen = 'cuarta'

if(gen === 'sexta'){
  console.log('el nombre del profe es mike')
}else if(gen === 'septima'){
  console.log('el nombre del profe es pablo')
}else{
  console.log('no se conoce al profe')
}

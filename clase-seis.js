 // DOM document object model
console.log('ola soy js')
console.log( document.getElementById('tweet'))

var imprimeElementos = function(){
  var tweet = document.getElementById('tweet')
  var div = document.getElementsByTagName('div')
  var avatar = document.getElementsByClassName('avatar')
  var listItem = document.querySelector('.tweet .tweet-header .avatar')
  var listItems = document.querySelectorAll('.tweet .tweet-header .avatar')
  console.log( document.getElementById('tweet'))
}

//repaso

console.log('mensaje')
var a;
a = '5';
var b = 5
var isAble = true
var nan; // nan === undefined
var nullVar = null

var result = 5 <= a;
console.log(result)

if(5 === '5'){
  	//
} else if(){

} else {

}

for(var i = 0; i < 10 ; i++){

}

var lista = [
  'a', 5, true
]

var objeto = {
  numero:5,
  text:'text',
  booleano: false
}

var customFunction = function(){
  // conjunto de instrucciones
}

customFunction()

var mainMenu = [
  {text:'home', href:'/home.html', isActive:true},
  {text:'Recipe', href:'/recipe.html', isActive:false},
]

var day = 'martes'
var classDays = [
  'martes',
  'jueves',
  'viernes'
]

if(classDays.lenght){
  console.log('hoy hay clase')
} else {
  console.log('hoy no hay clase')
}

if(true) console.log('if cortito')

var isTpApproved = true

// ternario
var congrats = isTpApproved ? 'felicitaciones!' : ':('

if(false && true){
  congrats = 'felicitaciones'
} else {
  congrats = ':('
}

var count = 0
while( count < classDays.length){
  console.log(classDays[count])
  ++count
} 

do{
  console.log(classDays[count])
  ++count
}while (count > 20)


for(var i = 0; i < classDays.length; i++){
  console.log(classDays[i])
}

/*
crear dos arrays con N cantidad de elementos que correspondan a episodios de dos series diferentes

iterando la lista se imprime cada nombre de cada episodio
y con modificar solo un valor, podré cambiar el array que imprimo

*/

var nums = [1,2,3,4,5]
var alpha = ['a','b','c']
var allArrays = [nums,alpha]


for(var i = 0; i < allArrays.length; i++){
  for(var j = 0; j < allArrays[i].length; j++){
    console.log(allArrays[i][j])
  }
}

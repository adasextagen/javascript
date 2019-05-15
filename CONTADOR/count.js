// validación de que el js funciona
console.log("estamos funcionando");
// INCIO DE VARIABLE
var count = 0

// funcion que suma
var addToCount = function(){
    count ++
    // console.log(count) - prueba que la funcion modifica el valor de count
    printCount()
}

// funcion que resta
var subsToCount = function(){
    if (count > 0){
        count --
        // console.log(count) - prueba que count disminuye
        printCount();
    }
}   

// funcion que reinicia
var resetCount = function(){
    count = 0
    // console.log(count) - prueba que reinicia la variable count
    printCount()
}

// funcion que imprime el resultado
var printCount = function (){
    var container = document.getElementById('count')
    // console.log(container) - con esto verificamos que efectivamente creamos el nodo
    container.innerText=count
}
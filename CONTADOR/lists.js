// creamos un array de objetos donde cada objeto representa un item de las listas
// y tiene como propiedad su ubicación para colocarlo en una lista u otra
var itemsList = [
    {text:'uno', isInitial: true},
    {text: 'dos', isInitial: false},
    {text: 'tres', isInitial: true},
]

var printItems = function(){
    // buscamos la lista en el DOM y la guardamos en una variable
    var initialList = document.getElementById('initialList');
    var finalList = document.getElementById('finalList');
    // console.log(initialList) con esto corroboramos que efectivamente estamos creando el nodo
    itemsList.map(function(item){
        // console.log(item.text) con esto corroboramos que se estar recorriendo la lista
        var itemLi = document.createElement('li')
        itemLi.innerText = item.text
        // console.log(itemLi)
        if (item.isInitial){
            initialList.appendChild(itemLi)
        } else{
            finalList.appendChild(itemLi)
        }   
    })
}
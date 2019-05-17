// creamos un array de objetos donde cada objeto representa un item de las listas
// y tiene como propiedad su ubicación para colocarlo en una lista u otra
var itemsList = [
    {text:'uno', isInitial: true},
    {text: 'dos', isInitial: false},
    {text: 'tres', isInitial: true},
]
 
var toggleItem = function (btn) {
    // console.log (btn.id)
    // con esto estamos negando el valor actual de la propiedad isInitial
    itemsList[btn.id].isInitial = !itemsList[btn.id].isInitial
    // console.log (itemsList[btn.id].isInitial)
    printItems()
}
// función que eliminará el elemento
var deleteItem = function(btn){
    // este método de las listas me permite borrar elementos de las listas,
    // y le tengo que indicar, el indice a partir de cuàndo le vamos a comenzar a borrar
    // y hasta donde debe borrar
    itemsList.splice(btn.index,1)
    printItems()
}

var createBtn = function(name,itemId,btnFunction){
    var btn = document.createElement('button')
    btn.innerText = 'delete'
    btn.id = itemId
    btn.onclick = function() { btnFunction(this) }
    return btn
}

var printItems = function(){
    // buscamos la lista en el DOM y la guardamos en una variable, estos son los nodos donde debemos colocar los items de la lista
    var initialList = document.getElementById('initialList');
    // debo vaciar cada lista luego de hacer el nodo
    initialList.innerHTML = ''
    var finalList = document.getElementById('finalList');
    finalList.innerHTML = ''
    // console.log(initialList) con esto corroboramos que efectivamente estamos creando el nodo
    itemsList.map(function(item, index){
        // console.log(item.text) con esto corroboramos que se estar recorriendo la lista
        var itemLi = document.createElement('li')
        itemLi.innerText = item.text
        
        // console.log(itemLi)
        // creamos un botón para incluirlo en un li
        // var toggleBtn = document.createElement('button')
        // // asignamos propiedades al boton
        // toggleBtn.innerText = 'toggle'
        // toggleBtn.id = index
        // // En el evento onclick del elemento itembtn ejecutamos una funciòn 
        // // cuyo parametro sera el elemento mismo 'this'
        // toggleBtn.onclick = function () { toggleItem(this) }
        
        // var deleteBtn = document.createElement('button')
        // deleteBtn.innerText = 'delete'
        // deleteBtn.id = index
        // deleteBtn.onclick = function() { deleteItem(this) }
        // agregamos el boton al li
        itemLi.appendChild (createBtn('toggle',index,toggleItem))
        itemLi.appendChild (createBtn('delete',index,deleteItem))
        // aqui creamos el elemento en la lista que corresponda de acuerdo al valor
        // de la propiedad que nos indica en cual lista debe ir
        if (item.isInitial){
            initialList.appendChild(itemLi)
        } else{
            finalList.appendChild(itemLi)
        }   
    })
}
// creamos un array de objetos donde cada objeto representa un item de las listas
// y tiene como propiedad su ubicación para colocarlo en una lista u otra
var itemsList = [
    {text:'uno', isInitial: true},
    {text: 'dos', isInitial: false},
    {text: 'tres', isInitial: true},
]
 
var toggleItem = function (btn) {
    itemsList[btn.id].isInitial = !itemsList[btn.id].isInitial
    printItems()
}
var deleteItem = function(btn){
    itemsList.splice(btn.index,1)
    printItems()
}

var createBtn = function(name,itemId,btnFunction){
    var btn = document.createElement('button')
    btn.innerText = name
    btn.id = itemId
    btn.onclick = function() { btnFunction(this) }
    return btn
}

var setNode = function(nodeName){
    var nodeName = document.getElementById(nodeName)
    nodeName.innerHTML = ''
    return nodeName
}

var createItem = function(text,index){
    var li = document.createElement('li')
    li.innerText = text
    li.appendChild (createBtn('toggle',index,toggleItem))
    li.appendChild (createBtn('delete',index,deleteItem))
    return li
}

var printItems = function(){
    var initialList = setNode('initialList')
    var finalList = setNode('finalList')
    // var initialList = document.getElementById('initialList');
    // initialList.innerHTML = ''
    // var finalList = document.getElementById('finalList');
    // finalList.innerHTML = ''
    itemsList.map(function(item, index){
        // var itemLi = document.createElement('li')
        // itemLi.innerText = item.text
        // itemLi.appendChild (createBtn('toggle',index,toggleItem))
        // itemLi.appendChild (createBtn('delete',index,deleteItem))
        if (item.isInitial){
            initialList.appendChild(createItem(item.text,index))
        } else{
            finalList.appendChild(createItem(item.text,index))
        }   
    })
}
// para este ejercicio estamos considerando que ya está resuelto
// el servidor nos entrego la informacion del usuario que usaremos para 
// definir que menu estaremos mostrando
var menuData = [
    {label:'home',href:'#',style:''},
    {label:'songs',href:'#',style:''},
    {label:'albums',href:'#',style:''},
]

var papaGarron

var createItem = function(item){
    var menuItem = document.createElement('a');
    menuItem.innerHTML = item.label;
    menuItem.href = item.href;
    console.log (menuItem)
}

var populateMenu = function(){
    papaGarron = document.getElementsByClassName('sarasa')[0]
    
    // for(var i = 0; i < data.length; i++){
    //     console.log(data[i].label);
    // }
}

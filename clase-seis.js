 // DOM document object model
console.log( document.getElementById('tweet'))

var imprimeElementos = function(){
  var useravatar = document.getElementById('user-avatar')
  var ul = document.getElementsByTagName('ul')
  var avatar = document.getElementsByClassName('avatar')
  var listItem = document.querySelector('.tweet .tweet-replay .replay-avatar')
  var listItems = document.querySelectorAll('.tweet .tweet-details .avatar-list')
    console.log(useravatar.attributes.class)
}

console.log(imprimeElementos())
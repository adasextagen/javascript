 // DOM document object model
console.log( document.getElementById('tweet'))

var imprimeElementos = function(){
  var tweet = document.getElementById('tweet')
  var div = document.getElementsByTagName('div')
  var avatar = document.getElementsByClassName('avatar')
  var listItem = document.querySelector('.tweet .tweet-header .avatar')
  var listItems = document.querySelectorAll('.tweet .tweet-header .avatar')
}
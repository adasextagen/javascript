var input
var comment
var commentList

var sendComment = function(){
    input = document.getElementById('commentBox');
    comment = input.value;
    
    var li = document.createElement('li');
    li.innerText = comment
    li.classList.add ('comment')

    commentList = document.getElementById('commentsList')
    commentList.appendChild(li)
    input.value = ''
}
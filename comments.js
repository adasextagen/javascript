var input
var comment
// var allComments = [
//     'loren ipsum 3',
//     'loren ipsum 2',
//     'loren ipsum 1'
// ]

var allComments = [
    {text:'loren ipsum 3', isInitial:true},
    {text:'loren ipsum 2', isInitial:true},
    {text:'loren ipsum 1', isInitial:true}
]

var handleKeyPress = function(event){
    // console.log(event.keyCode) /* CON ESTO IMPRIMIMOS EL CÒDIGO DE LA TECLA QUE SE PRESIONA */
    if (event.keyCode === 13){
        // console.log('deberìa hacer algo')
        sendComment()
    }
}

var printComments = function(){
    commentList = document.getElementById('commentsList')
    commentList.innerHTML = ''
    allComments.map(function(comment){
        var commentItem = document.createElement('li')
        commentItem.classList.add ('comment')
        commentItem.innerText = comment.text
        commentList.appendChild(commentItem)
    })
}

var sendComment = function(){
    input = document.getElementById('commentBox')
    newComment = input.value;
    if (newComment !== '' && newComment.length > 2){
        input.value = ''
        // allComments.push(newComment) /* agrega elementos al final del Array */
        allComments.unshift({text:newComment,isInitial:true}) /* agrega elementos al principio del array */
        // console.log(allComments)
        printComments()
    }
}
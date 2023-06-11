function saveComment() {
  var commentInput = document.getElementById('comment-input');
  var commentZone = document.getElementById('comment-zone');

  var commentText = commentInput.value;
  if (commentText.trim() !== '') {
    var commentItem = document.createElement('div');
    commentItem.classList.add('comment');
    commentItem.innerText = commentText;
    commentZone.appendChild(commentItem);
    commentInput.value = '';
  }
}
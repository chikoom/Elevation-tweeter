const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


const getPostText = () => {
  return $('#input').val()
}

const clearInput = () => {
  $('#input').val('')
  return true
}

const getParentPostID = (element) => {
  return $(element).closest('.post').data().id || false
}


const post = () => {

  const postText = getPostText()
  
  const postAdded = tweeter.addPost(postText)

  const postRendered = (postAdded) ? 
    renderer.renderPosts(tweeter.getPosts())
    :false;

  if(postRendered) clearInput()

  return true

}

$('#posts').on('click', '.delete', function() {

  const postID = getParentPostID($(this))
  const postDeleted = tweeter.removePost(postID)

  const postRendered = (postDeleted) ? 
    renderer.renderPosts(tweeter.getPosts())
    :false;

  return postRendered
})


const getCommentText = (element) => {
  return $(element).closest('.comments-input').find('.input-comment').val()
}



$('#posts').on('click', '.submit-comment', function() {

  const commentText = getCommentText($(this))
  const postId = getParentPostID($(this))
  const commentAdded = tweeter.addComment(commentText, postId)

  const commentRendered = (commentAdded) ? 
    renderer.renderPosts(tweeter.getPosts())
    :false;

  return true
})

const getCommentID = element => {
  return $(element).closest('li').data().id || false
}

$('#posts').on('click', '.delete-comment', function() {

  const postID = getParentPostID($(this))
  const commentID = getCommentID($(this))

  const commentDeleted = tweeter.removeComment(postID ,commentID)

  const postRendered = (commentDeleted) ? 
    renderer.renderPosts(tweeter.getPosts())
    :false;

  return postRendered
})

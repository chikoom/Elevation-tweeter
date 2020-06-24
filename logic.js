

const Tweeter = () => {

  _posts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
  ]

  let _postIdCounter = 2
  let _commentIdCounter = 6

  const getPosts = () => _posts

  const addPost = text => {
    _posts.push(
      {
        text: text,
        id: `p${++_postIdCounter}`,
        comments: []
      }
    )
  }

  const removePost = postID => {
    for(let postIndex in _posts){
      if(_posts[postIndex].id === postID){
        _posts.splice(postIndex,1)
        return true
      }
    }
    console.log('Did not found Post with the ID given')
    return false
  }

  const addComment = (text, postId) => {
    for(let post of _posts){
      if(post.id === postId){
        post.comments.push({
          id: `c${++_commentIdCounter}`,
          text: text
        })
        return true
      }
    }
    console.log('Did not found Post with the ID given')
    return false
  }

  const removeComment = (postId, commentId) => {
    for(let post of _posts){
      if(post.id === postId){
        for(let commentIndex in post.comments){
          if(post.comments[commentIndex].id === commentId){
            post.comments.splice(commentIndex,1)
            return true
          }
        }
      }
    }
    console.log('Did not found Post or Comment with the ID given')
    return false
  }
  
  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment
  }

}

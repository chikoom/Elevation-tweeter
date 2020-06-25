
const Renderer = () => {

  const createComments = post => {

    const $commentsContainer = $('<div class=comments-container></div>')
    const $commentsInput = $(`<div class="comments-input"><input class="input-comment" type="text" placeholder="Type a comment"><button class="submit-comment">Submit</button></div>`)

    const $commentsList = $('<ul class="comments"></ul>')

    for(let comment of post.comments){
      const $singleComment = `
        <li data-id="${comment.id}">
          <p>${comment.text}</p>
          <button class="delete-comment">X</button>
        </li>`
      $commentsList.append($singleComment)
    }

    $commentsContainer.append($commentsInput)
    $commentsContainer.append($commentsList)

    return $commentsContainer
  }

  const createPost = post => {

    const $singlePost = $(`<div class="post" data-id="${post.id}"></div>`)
    const $postText = $(`<p class="post-text">${post.text}</p>`)
    const $deleteButton = $(`<button class="delete">Delete Post</button>`)

    return $singlePost.append($postText)
                      .append(createComments(post))
                      .append($deleteButton)
  }

  const renderPosts = posts => {

    const $postsContainer = $('#posts').empty()

    for (let post of posts) 
      $postsContainer.append(createPost(post))

    return true

  }

    return {renderPosts}
}

const Renderer = () => {

  const createComments = post => {

    const $commentsContainer = $('<ul class="comments"></div>')

    for(let comment of post.comments){
      const $singleComment = `
        <li data-id="${comment.id}">
          <p>${comment.text}</p>
          <button class="delete-comment">X</button>
        </li>`
      $commentsContainer.append($singleComment)
    }

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

  }

    return {renderPosts}
}
function loadPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(data) {
  const postContainer = document.getElementById('Posts-container');
  for (const post of data) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
       <h3>User-${post.userId}</h3>
       <h3>Post: ${post.title}</h3>
       <p>Description: ${post.body}</p> 
    `
    postContainer.appendChild(postDiv);
  }
}
loadPost();
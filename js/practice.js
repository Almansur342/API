function loadUsers3(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => displayUsers3(data))
}
function displayUsers3(data){
  const ul = document.getElementById('users-list');
  for(const user of data){
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
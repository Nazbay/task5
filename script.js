
function load(){
fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then((data) => {
         let abc = data.map(elem => {
             return`
             <h2>Id: ${elem.id}</h2>
             <h3>Title: ${elem.title}</h3>
             <p>Body: ${elem.body}</p>`}).join("");
         document.querySelector('.code').insertAdjacentHTML("afterbegin",abc)
     })
     .catch(err => {
         console.log(err)
     })

    }

load();

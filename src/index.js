import Axios from 'axios'

window.addEventListener('load', (event) => {
    let baseUrl = Axios.create({
        baseURL:"https://jsonplaceholder.typicode.com"
    })

    baseUrl.get("/todos/1").then(e=>console.log(e))
  });

import Axios from 'axios'

window.addEventListener('load', (event) => {
    let baseUrl = Axios.create({
        baseURL:"http://sheltered-reaches-95604.herokuapp.com"
    })

    baseUrl.get("/api/showData").then(e=>console.log(e))
  });

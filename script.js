// const axios = require("axios");

const container = document.querySelector(".container")
const input = document.querySelector(".input")
const searchBtn = document.querySelector(".search-btn")

axios("https://jsonplaceholder.typicode.com/users")
    .then((get) => {
        console.log(get)
        get.data.slice(0,5).sort((a,b) =>(a.name - b.name)).map(el => (
            container.innerHTML += `<div class="block">
  <table>
        <tr>
        <td>${el.id}</td>
        <td>${el.name}</td>
        <td>${el.email}</td>
        <td>${el.phone}</td>
        </tr>
  </table>
</div>`
        ))
    })

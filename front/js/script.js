const UrlApi = 'http://localhost:3000/api/products'
const Items = document.getElementById('items')
fetch(UrlApi).then(
    reponse => {
        if (!reponse.ok)
        throw new Error('network response was not OK')
        return reponse.json()
    }
).then(data => {
    data.forEach(element => {
        let Matemplate = `<a href="./product.html?id=${element._id}">
        <article>
          <img src="${element.imageUrl}" >
          <h3 class="productName">${element.name}</h3>
          <p class="productDescription">${element.description}</p>
        </article>
      </a>` 
        Items.innerHTML += (Matemplate)
    });
}).catch(error => {
let HtmlErreur = document.createElement('h2')
HtmlErreur.innerHTML ='Network was not OK'
Items.appendChild(HtmlErreur)
})
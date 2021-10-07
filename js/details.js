const productDet = document.querySelector(".prodspec");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://conscious-coffee.bentagi.one/wp-json/wc/store/products/" + id;

async function fetchProduct() {

    try {
        const response = await fetch(url);
        const product = await response.json();

        console.log(product);

        createHtml(product);
      
    }
    catch(error) {
        console.log(error);
    }
    
}

fetchProduct();


function createHtml(product){
productDet.innerHTML += 
`<h2 class = "specific-name">${product.name}</h2>
<div class = "coffeebagspec"><img src="${product.images[0].src}"></div>
<div class = "specific-details"><p>${product.description}</p></div>
<p class = "price">${product.price_html}</p>
<div  class = "button-specific"><button>Add to basket</button></div>`
}

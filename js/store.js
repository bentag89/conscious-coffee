const storeUrl = "https://conscious-coffee.bentagi.one/wp-json/wc/store/products";
const productDiv = document.querySelector(".products");
const basket = document.querySelector(".basket");
const shoppingList = document.querySelector(".shopping-list");
const totalPrice = document.querySelector(".total");
const basketProducts = JSON.parse(localStorage.getItem("shoppingList"));
const basketDiv = document.querySelector(".shopping-list");
let basketArray = [];


async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
    products.forEach(function (product) {
        productDiv.innerHTML +=
        `<h2 class = "product-name">${product.name}</h2>
            <section class = "cof">
            <a href="prodspec.html?id=${product.id}"><img class="coffeebag" src="${product.images[0].src}"></a>
            <div class="cofee-info">
            <p class = "price">${product.price_html}</p>
            <button data-product="${product.id}">Add to basket</button>
          </div></section>`
    })

    const buttons = document.querySelectorAll("button");


    buttons.forEach(function(button){
        button.onclick = function(event){
            const addToBasket = products.find(item => item.id == event.target.dataset.product);
            basketArray.push(addToBasket);
            console.log(basketArray);
            viewBasket(basketArray);
            localStorage.setItem("shoppingList", JSON.stringify(basketArray));
        }
    })

    function viewBasket(basketList){
        basket.style.display = "block";
        shoppingList.innerHTML = "";
        let total = 0;
        basketList.forEach(function(basketItem){
            total += parseInt(basketItem.prices.price);
            shoppingList.innerHTML += 
            `<div class = "basket-item">
                <h3 class = "basket-item-name">${basketItem.name}</h3>
                <div  class = "basketimage"><img src = "${basketItem.images[0].src}"></div>
            </div>`
        })
        totalPrice.innerHTML = `Total: kr${total}`;
    }
}

getProducts(storeUrl);



